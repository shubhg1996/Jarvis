import pygame.camera
import os
import pygame.image

pygame.camera.init()
cam = pygame.camera.Camera(pygame.camera.list_cameras()[0])
cam.start()
img = cam.get_image()
i = 0
while os.path.exists("photos/photo%s.bmp" % i):
    i += 1
pygame.image.save(img, "photos/photo%s.bmp" % i)
pygame.camera.quit()
print("Saved photo%s.bmp" % i)