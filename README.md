# Discord Guard Bot

 - [Discord Guard Bot](https://github.com/beT4w/betaGuard)
      - [Kurulum](#kurulum)
      - [İçerikler](#İçerikler)
      - [İletişim](#İletişim)
      - [FAQ](#faq)

<div align="center">
   <a href="https://github.com/BetaWile">
      <img src="https://betaaa.has-a-hot.mom/55orRHk8J.gif">
   </a>
</div>

# Kurulum
* İlk olarak bilgisayarına [Node JS](https://nodejs.org/en/) indir.
* Bu projeyi zip halinde indir.
* Herhangi bir klasöre zipi çıkart.
* Daha sonra `beta`/`Settings`/`Config.json` dosyalardaki bilgileri doldur.
* Sonra klasörün içerisinde bir `powershell` ya da `cmd` penceresi aç.
* ```npm install``` yazarak tüm modülleri kur.
* Kurulum bittikten sonra ```node beta.js``` yaz ve botu başlat.


## Botun İntentlerini Açmayı Unutma!
* [Açmak İçin Tıkla](https://discord.com/developers/applications)
<img src="https://cdn.discordapp.com/attachments/818953120452575322/851116463166849054/3P4KKB.png"/>

***Tadaaa 🎉. Artık guard botun hazır. Dilediğin gibi kullanabilirsin.***


# Neden Yayınlandı?
 Kısaca neden böyle bir şey için uğraştığımı anlatayım. Hem kendimi geliştirmek daha iyi bilgilere ulaşmak hatalar alıp onları nasıl düzeltebileceğimi bulmak tecrübe kazanmak için hemde Türkiyede bu kadar iyi detaylı, özenli bir altyapının olmadığını fark edip bundan sizinde yaralanmanızı istedim.



## Config.json Bilgi

```json
{

    "Bot": {
        "token": "TOKEN",
        "owner": "SAHİP_ID",
        "server": "SUNUCU_ID",
        "activity": "DURUM"
    },

    "Guard": {
        "safezone": ["GÜVENLİ_KİŞİ", "LER"],
        "safebots": ["GÜVELİ BOT", "LAR"],
        "jail": "CEZALI_ROL_ID",
        "booster": "BOOSTER_ROL_ID",
        "log": "LOG_KANAL_ID"
    }
    
}
```
## Panel.json Bilgi
* True = Açık
* False = Kapalı 
```json
{
    "RoleProtectiions": true,
    "ChannelProtections": true,
    "GuildProtections": true,
    "EmoteProtections": true
}
```

# İçerikler

## • Guard {
  - [x] Rol Oluşturma Koruma
  - [x] Rol Silme Koruma
  - [x] Rol Güncelleme Koruma
  - [x] Kanal Oluşturma Koruma
  - [x] Kanal Silme Koruma
  - [x] Kanal Güncelleme Koruma
  - [x] Sunucu Güncelleme Koruma
  - [x] Üye Güncellenme Koruma
  - [x] Emoji Güncellenme Koruma
  - [x] Emoji Silme Koruma
  - [x] Emoji Oluşturma Koruma
  - [x] Ban Koruma
  - [x] Kick Koruma
  - [x] Ban Açma Koruma
  - [x] Bot Koruma
  - [x] Güvenli Fonksiyonu
## };

# İletişim
* [Discord Profilim](https://discord.com/users/852615172673503262)
* [Discord Sunucum](https://discord.gg/58UAMVJTSH)

# FAQ
Sıkça sorulan sorulara buradan ulaşabilirsin.

**Q:** Altyapıyı geliştirilmeye devam edilecek mi?<br />
**A:** Eğer bir şeyler eklersem dolaylı yoldan burayada ekleyeceğim.

**Q:** İstek herhangi bir şey ekliyor musun?<br />
**A:** Eğer istediğin şey hoşuma giderse ve yapmaktan zevk alacaksam eklerim.

**Q:** Altyapı tamamen sanamı ait?<br />
**A:** Evet, tamamen bana aittir.

**Q:** Hatalarla ilgileniyor musun?<br />
**A:** Proje içindeki hatalarla ilgileniyorum. Eğer bir hata ile karşılaşırsanız lütfen Discorddan benimle iletişim kurun. 


## NOT: Botta liasns bulunmaktadır. Bu botun dosyalarının benden habersiz paylaşılması/satılması durumunda gerekli işlemler yapılacaktır!
