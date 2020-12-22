/**
 * Linux'te terminal (shell) uzerinden asagidaki islemleri  yapiniz.

1. Linux program repositorysini guncelleyin (update)
2. Kurulu programlari guncelleyin (upgrade)
3. Snap packageri ile Visual Studio Code programini kurun.
https://linuxize.com/post/how-to-install-visual-studio-code-on-ubuntu-20-04/
4. Chrome browseri indirin (wget) ve apt packager ile kurup terminalden calistirin (google-chrome)
https://linuxize.com/post/how-to-install-google-chrome-web-browser-on-ubuntu-20-04/
5. Linux'te GUI uzerinden LibreOffice 7.0 programini snap packager ile kurun ve programlari inceleyin. "Writer" programi ile yeni bir belge acip Word (.docx) formatinda,  "Calc" programi ile Excel (.xlsx) ve "Impress" ile yeni bir belgeyi Powerpoint (.pptx) formatinda kaydedin. 
https://tecadmin.net/install-libreoffice-on-ubuntu-20-04/
6. Terminalden yeni bir kullanici ve grup ekleyin. 
7. Vim editoru ile bir dosya olusturun (index.html) ve birkac kelime ekleyip kaydedin.
https://coderwall.com/p/adv71w/basic-vim-commands-for-getting-started
8. Nano editoru app.js dosyasini olusturun ve birkac kelime ekleyip kaydedin.
https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/
9.  "app.js" dosyasinin sahibini yeni eklediginiz kullanici ve grup olarak degistirin. (Change file owner/group -> chown)
10. index.html dosyasina user, group ve others icin okuma, yazma ve calistirma (read, write, execute) hakki verin (chmod)
11. Verdiginiz yetkileri dosyalarin detayli listesi ile kontrol edin. (ls -l)
12. alias, df, history, date, grep, ps, kill, tar, top, du, head, tail, wget, find komutlarini terminalden kullanip, hangi islem icin kullanildigini kisaca yaziniz. (Ornek: $ ls -al   // Dosya ve klasorlerin sahipleri, izinleri ve buyuklukleri gibi detayli bilgilerle, gizli olanlar dahil, listelenmesi icin kullanilir)
 */

/*******************************
 * 1.)sudo apt update --> sistemde yuklu olan uygulamalari guncellemek icin yukleme yapar
 * 
 * 2.)sudo apt upgrade --> update edilen guncellemeleri yukler
 * 
 * 3.)sudo snap install --classic code --> "--classic code"  Visual Studio Code' u Snap ile kurmamiz icin gerekli uygulama adi
 *
 * 4.)wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb --> ile chrome browser kurulum dosyasini indirdik. sudo apt install ./google-chrome-stable_current_amd64.deb --> ile google chrome browserini kurduk
 * 
 * 5.)sudo snap install libreoffice --> ile LibreOffice 7.0 programini kurduk
 * 
 * 6.)sudo adduser umut2 --> umut2 adinda yeni bir kullanici hesabi eklendi
   sudo addgroup workingumut --> workingumut yeni bir kullanici grubu eklendi
 * 
 * 7.) sudo apt install vim --> ile vim yuklendi
   vim index.html --> ile index.html adinda bir dosya olusturuldu.Acilan alani word dosyasi olarak kullanabiliyoruz(i ile insert modda).tekrar terminale donmek icin  escape + q,q!,wq komutarindan birini kullaniyoruz.nirkac kelime ekleyip kaydetmek icin (wq)
 * 
 * 8.)nano app.js --> ile app.js adinda bir dosya olusturuldu. Cikan ekranda yapilan islemleri kaydetmek icin ctrl+o ve cikmak icin ctrl+x kullanildi
 * 
 * 9.)sudo chown umut2:workingumut ./app.js  --> komutu ile dosyanin kullanicisi ve kullanici grubu degisti diger kullanicilar yalnizca izin verilen islemleri yapabilirler
 * 
 * 10.)chmod u=rwx,og=rwx index.html --> kodundaki u user , o others , g group u temsil etmektedir.
 * 
 * 11.) ll oder ls -l ile kontrol edildi. 3 yetki 3 bolumde de var
 * 
 * 12.)
 *      alias   >> Linux komutlarina alternatif bir isim ermek icin kullanilir
 *      df      >> Sistemin disk alaninin kullanimini gosterir.Mevcut dosyalarin boyutleri veya mavcut kapasite durumu
 *      history >> gecmiste yazilan komutlari goruntulemek icin kullanilir
 *      date    >> anlik guncel tarih bilgisini verir
 *      grep    >> belirli bir metinde kelime veya soz grubu bulmamizi saglar
 *      ps      >> mevcut durumda calisan islemlerin detayli listesini verir
 *      kill    >> ps ile goruntuleme yapilan islemlerin durdurulmasi ve sonlandirilmasi icin kullanilir.(kill PID komutu PID numarasi ps ile bulunur)
 *      tar     >> belirli dosyalari gruplayip sikistirmak icin kullanilir. 
 * -c > arsiv olusturma,
 * -z > arsivi g.zip ile (daha fazla) sikistirma, 
 * v > ayrinti goruntuleme,
 *  f > Arşivin dosya adını belirlenmesi komutlari ile birlikte kullanilr. 
 * -xvf > ile de tar.gz dosyalari dizine cikartillir
 *      top     >> ile çalışmakta olan işlemlerin anlık istatistikleri gorullur.(windows gorev yoneticisi gibi)
 *      du      >> dosyalarin kapladigi alani gosterir
 *      head    >> tail komutunun tamamlayıcısıdır.head komutu verilen girişin ilk N verisini yazdırır(varsayilan olarak ilk on satir)
 *      tail    >> head komutunun tamamlayıcısıdır.tail komutu verilen girişin son N verisini yazdırır(varsayilan olarak son on satir)
 *      wget    >> internet agindan komut satiri kullanarak dosya, uyg. vs. indermeyi saglar
 *      find    >>  genel olarak dosya aramak icin kullanilir
 * 
 * 
 * 
 * ***/
