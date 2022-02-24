import requests
from requests_html import HTMLSession

session = HTMLSession()
url = "https://www.google.com.ua/maps/place/Aroma+Kava/@50.4686551,30.4992201,14z/data=!4m9!1m2!2m1!1saroma!3m5!1s0x40d4cffa26385311:0xae1fd900bab216d!8m2!3d50.4686598!4d30.5167216!15sCgVhcm9tYSIDiAEBWgciBWFyb21hkgELY29mZmVlX3Nob3A?hl=ru"
r = session.get(url)
print(r.text)