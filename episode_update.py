import difflib
import json
import kissanime_api

kiss_desktop = kissanime_api.KissAnime()
with open('animelinks.json') as animelinks:
    animelist = json.load(animelinks)
    with open('latest_episodes.json', 'r+') as outfile:
        newep = json.load(outfile)
        for key in animelist.keys():
            anime_info = kiss_desktop.get_anime_info("http://kissanime.ru/Anime/"+animelist[key])
            episode_url = anime_info.get_episodes()[0]
            newep[animelist[key]] = episode_url.get_title()
        outfile.seek(0)
        json.dump(newep, outfile)
        outfile.truncate()
        print("Updated")