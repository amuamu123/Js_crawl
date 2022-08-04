import re
import time
import random
import requests
from PIL import Image
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from io import BytesIO
from selenium.webdriver.common.action_chains import ActionChains

def get_merge_img(img_content, location_list):
    '''
    拼接图片
    :param img_content:
    :param location_list:
    :return:
    '''
    im = Image.open(img_content)
    im_list_upper = []
    im_list_done = []
    for  location  in location_list:
        # print(location)
        if int(location['y']) == -58:
            im_list_upper.append(im.crop((abs(int(location['x'])), 58, abs(int(location['x']))+10, 116)))
        if int(location['y']) == 0:
            im_list_done.append(im.crop((abs(int(location['x'])), 0, abs(int(location['x']))+10, 58)))
    #create new image
    new_im = Image.new('RGB', (260,116))
    x_offset=0
    for im in im_list_upper:
        new_im.paste(im, (x_offset, 0))
        x_offset += 10
    x_offset = 0
    for im in im_list_done:
        new_im.paste(im, (x_offset, 58))
        x_offset += 10
    return new_im

def get_img(driver, div_class, num):
    '''
    获取图片
    :param driver:
    :param div_class:
    :param num:
    :return:
    '''
    background_imgs = driver.find_elements_by_class_name(div_class)
    location_list = []
    imge_url = ''
    for img in background_imgs:
        location = {}
        imge_url = re.findall(r'background-image: url\(\"(.*?)\"\); background-position: (.*?)px (.*?)px;', img.get_attribute('style'))[0][0]
        location['x'] = re.findall(r'background-image: url\(\"(.*?)\"\); background-position: (.*?)px (.*?)px;', img.get_attribute('style'))[0][1]
        location['y'] = re.findall(r'background-image: url\(\"(.*?)\"\); background-position: (.*?)px (.*?)px;', img.get_attribute('style'))[0][2]
        location_list.append(location)
    response = requests.get(imge_url).content
    img_content  = BytesIO(response)
    image = get_merge_img(img_content, location_list)
    image.save('{}.jpg'.format(num))
    return image

def get_diff_location(image1, image2):
    '''
    通过像素对比 找到缺口位置
    :param image1:
    :param image2:
    :return:
    '''
    for x in range(1, 259):
        for y in range(1, 115):
            if is_similar(image1,image2,x,y) == False:
                #判断成立 表示xy这个点 两张图不一样
                return x

def is_similar(image1,image2,x,y):
    pixel1 = image1.getpixel((x,y))
    pixel2 = image2.getpixel((x,y))
    for i in range(0,3):
        if abs(pixel1[i]) - pixel2[i] >=50:
            return False
    return True

def get_track(x):
    '''
    滑块移动轨迹
    初速度 v =0
    单位时间 t = 0.2
    位移轨迹 tracks = []
    当前位移 ccurrent = 0
    :param x:
    :return:
    '''
    v = 0
    t = 0.2
    tracks = []
    current = 0
    # mid = x*5/8#到达mid值开始减速
    # x = x+10
    while current < x:
        # if current < mid:
        #     a = random.randint(1,3)
        # else:
        #     a = -random.randint(2,4)
        a = 4
        v0 = v
        #单位时间内位移公式
        s =v0*t+0.5*a*(t**2)
        #当前位移
        current = current+s
        tracks.append(round(s))
        v = v0+a*t
    for i in range(3):
        tracks.append(-1)
    return tracks

def main(driver, element):
    #1为完整图、2为有缺口图
    image1 = get_img(driver, 'gt_cut_fullbg_slice',1)
    image2 = get_img(driver, 'gt_cut_bg_slice',2)
    x = get_diff_location(image1, image2)
    tracks = get_track(x)
    ActionChains(driver).click_and_hold(element).perform()
    for x in tracks:
        ActionChains(driver).move_by_offset(xoffset=x, yoffset=0).perform()
    ActionChains(driver).release(element).perform()
    time.sleep(3)

if __name__ == '__main__':
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get('http://www.cnbaowen.net/api/geetest/')
    try:
        count = 5
        # waiting slidingVC loading
        wait = WebDriverWait(driver, 10)
        element = wait.until(EC.element_to_be_clickable((By.CLASS_NAME, 'gt_slider_knob')))
        while count >0:
            main(driver, element)
            try:
                succes = wait.until(EC.presence_of_all_elements_located((By.XPATH, '//div[@class="gt_ajax_tip gt_success"]')))
                if succes:
                    print('恭喜你！识别成功...')
                    break
            except Exception as e:
                print('识别错误，继续')
                count -=1
    finally:
        driver.quit()