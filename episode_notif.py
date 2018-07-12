import json

with open('animelinks.json') as animelinks:
    animelist = json.load(animelinks)
    with open('latest_episodes.json', 'r+') as outfile:
        newep = json.load(outfile)
        updates = 0
        for key in animelist.keys():
            if(animelist[key] in newep):
                if(animelist[key]+"_prev" not in newep or newep[animelist[key]+"_prev"] != newep[animelist[key]]):
                    updates += 1
                    print(newep[animelist[key]])
                    newep[animelist[key]+"_prev"] = newep[animelist[key]]
        if updates==0 :
            print("No updates")

        outfile.seek(0)
        json.dump(newep, outfile)
        outfile.truncate()