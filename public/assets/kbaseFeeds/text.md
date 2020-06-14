## KBase Feeds service

It's a notification feed service. For KBase.

V1 isn't great. It's built around a single largish Mongo collection. The original schema was built around each user having a single "feed". But, then, that quickly got wedged into having multiple feeds. Feature-creep, I tells ya.

V2 will be better. I'd like to use multiple Redis collections to track users and their feeds. There's been pushback against introducing Yet Another Database Application, but I feel that's the best in business for this purpose.