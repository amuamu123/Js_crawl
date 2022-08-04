import os
path = './Bilibili/'
for file_ptah in os.listdir(path):
    title = path + file_ptah + '/' + os.listdir(path+file_ptah)[0].split('.')[0]
    audio = title + '.mp3'
    vedio = title + '.mp4'
    output = title + '(含音频).mp4'

    os.system('ffmpeg -i {} -i {} -c:v copy -c:a aac -strict experimental {}'.format(vedio, audio, output))