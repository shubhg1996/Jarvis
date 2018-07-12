import webbrowser
import sys
import difflib
import json

with open('animelinks.json') as animelinks:
    animelist = json.load(animelinks)
    webbrowser.open_new_tab("http://kissanime.ru/Anime/"+animelist[difflib.get_close_matches(sys.argv[1], animelist.keys(),n=1)[0]])
    print("Opened in Chrome")