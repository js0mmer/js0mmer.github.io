from __future__ import print_function
import random
import re

# Use r to have normal backslashes rather then escape backslashes
spongebob = r"""
      .--..--..--..--..--..--.
    .' \  (`._   (_)     _   \
  .'    |  '._)         (_)  |
  \ _.')\      .----..---.   /
  |(_.'  |    /    .-\-.  \  |
  \     0|    |   ( O| O) | o|
   |  _  |  .--.____.'._.-.  |
   \ (_) | o         -` .-`  |
    |    \   |`-._ _ _ _ _\ /
    \    |   |  `. |_||_|   |
    | o  |    \_      \     |     -.   .-.
    |.-.  \     `--..-'   O |     `.`-' .'
  _.'  .' |     `-.-'      /-.__   ' .-'
.' `-.` '.|='=.='=.='=.='=|._/_ `-'.'
`-._  `.  |________/\_____|    `-.'
   .'   ).| '=' '='\/ '=' |
   `._.`  '---------------'
           //___\   //___\
             ||       ||
             ||_.-.   ||_.-.
            (_.--__) (_.--__)
"""

patrick = r"""
                                                MMM0                                                
                                              SMr  ZMM                                              
                                              M       MM                                            
                                             MM        MM                                           
                                             Mr     .   MM                                          
                                             M      i    MM                                         
                                             Mi           MM                                        
                                             MM            M                                        
                                             7M            .M                                       
                                              M             WM                                      
                                              BM             M:                                     
                                              MMMMi  ,        M                                     
                                              M      MM       M;                                    
                                              MX      .       iM                                    
                                              M                M                                    
                                             MM   ,X           MM                                   
                                            MM      ZM7         M                                   
                                           ,M       ZMMM        MS                                  
                                           MMM     ZMMM          M                                  
                                           MM         M          M                                  
                                           M,    MMMM2           M@                                 
                                         MM2 XMMM    7M;         8M                                 
                                       8M     .i       MX         M                                 
                                      XM MMMMMMMMMMMM   M         M                                 
                                      MMM    7M     :MM ai        M                                 
                                      M    M M ZM      8MM        MM                                
                                      M   MM M  Ma      M         XM                                
                                      M       M         M          M                                
                                      WM      Mr       WM          M                                
                                       M,     MM0     SM           M                                
                                        MMMMMM  2MMWMM@            @M                               
                                       M                     MM     M                               
                                      MX                    MM@r    MM                              
                                   MMMMBMM0             8MMM         MM                             
                                   M    . MMMMMMMMMMMMMM8             BMi                           
                                   M                                   iMMS                         
                                 MMM                                      MM                        
                               MM ;M                                        MM:                     
                             MM7  M                                           MM                    
                           MMS   MW                                             MM                  
                         MM:    ,M                                     @         MM7                
                       MM       M        7M                            MM          MM               
                     MM.       M         MM                                         MM              
                   BMS        M;                                                      Mr            
                  MM         M,                                    M                   M            
                 MZ         M:                                    7MMM                 .M           
               .M          MZ                                        MM                 WM          
              .M          MW  MM              .r                       Ma                MX         
              M          2M   M               MM                        MM               iM         
             MM          M                                               MM               M         
             M MM        M                                                2M              MM        
             M          8M                                                 ZM             8M        
             M          :0     @8S                                          8M          M  M        
             M         BMM    Mi                                             MM         MrBM        
             MM      MMM aM    MMMM                                      MMM7 MM          M:        
              MM  SMM@   MWMM0                                     WMMMM:  MMB2MM        iM         
                MMM      M W  ;2ZMZMZSS                  2XMM@MM@@;  20M@M7    M M       MZ         
                         M M MMMM2     8MWMMMMMBX0SrMMMM     .MM@MMMS.        MM .MZ    MM          
                         M r     iZMMMMMMWM07M;MMMMMMMMMMMMMZ                 M    8MMMM            
                         M M    ;            M0                              MM                     
                         Ma MMM8MM           MM                           MM Mi                     
                          M    MM     MZM    M                           Mi :M                      
                          M0  M       M  MMMM.                           M  M:                      
                           M  MM      iM                                  MWM                       
                           MM   MMMM0MM                              MMM   M                        
                            M             2BX       M               M2  M 7M                        
                         ,  M;              :MBMMMMMMM             M     arM                        
                         i  MM                 Mi    M             M       M                        
                             .MMMMM0a22a88MMMMMM     M             M     ZMM                        
                               M   :M@@@Z   BM       MMM8iS      7 MMMMMM:                          
                               MM           M7         :MSMMMMMMMM@W    M                           
                                M0 MW       M           M              M                            
                                 MM 7      M,           MM            M                             
                                  8MM    MMX             MM         MM                              
                                     MMMM,                MM      XMa                               
                                                           ,MMMMMMM                                 
"""

squidward = r"""
           .--'''''''''--.
        .'      .---.      '.
       /    .-----------.    \
      /        .-----.        \
      |       .-.   .-.       |
      |      /   \ /   \      |
       \    | .-. | .-. |    /
        '-._| | | | | | |_.-'
            | '-' | '-' |
             \___/ \___/
          _.-'  /   \  `-._
        .' _.--|     |--._ '.
        ' _...-|     |-..._ '
               |     |
               '.___.'
                 | |
                _| |_
               /\( )/\
              /  ` '  \
             | |     | |
             '-'     '-'
             | |     | |
             | |     | |
             | |-----| |
          .`/  |     | |/`.
          |    |     |    |
          '._.'| .-. |'._.'
                \ | /
                | | |
                | | |
                | | |
               /| | |\
             .'_| | |_`.
             `. | | | .'
          .    /  |  \    .
         /o`.-'  / \  `-.`o\
        /o  o\ .'   `. /o  o\
        `.___.'       `.___.'
"""

plankton = r"""
7777r77777777777rrrr7rr7;;;;7rXrrrrrrrrrrrrrrrrrrrrrrr;.SS;77777777777r7777rrrrrrrrrrr77777rrrrr7777
7777r7777777777777777r7XrZB:r7r777777777777777777777r; 28rr77777777777777777777rrrrrrr77777rrrrr7777
rrrrr77777777777777777;7irBX:7777777777777777777777r;.WMii7r777r777777XXXX777777rrrrrr77777rrrrrrrrr
7XXXX7777777777r777777XX7;aM,;rXrrrrr77777777777X7XX,ZMZ8;7777777777777777777777rrrrr777777i;rr;7777
7777777777777777777777777r:M0;iSr777777777777777rrXirMi XrX777777777777777777777rrrrrr;rrrrrrrrr7777
77777XXXXXXXXXXX7777777777;rM@.r7X7777XXXXXXXXXXX77 0B i7X7XX77XrrrrrrrrrrrXX777r7777rrrrrrrr7777777
777777rrrrrrrrrr7777777777r;:M; ,;iXXr77777777777X,2MB7;7X7777XXXXXXXXXXXX777777X77777XXXX7XX7777XXr
7777777777777777777777777777,SMBSaXr777777777777rS MM.;;77r777XX7777777777X77777XXXXXXXXXXX77777777;
7777777777777777XXXXXXXXXX7XXi2Mi ;XXXXXXXXXXXXX7i M, rrrr777777XXXXXXXXX7XXXXXXX77777XX777XXXXXXXXr
7777777777777777777777777777ri:XM8.r7XXXXXXXXXXXr78Mr;777r7XXXXXXXXX7XXXXXSXX777rrrrrrr;;7XXXX7r77X7
777777777777777777777777777XSXr aM2irXXXXXXXXXXX; MZ77XX7rrr7XX7XXXXXXXXXXX777777777777r77777X777777
XXXXXXXXXXXXXXXXXXXXXXXXXXX7rXS;2MM0 rXXXXXXXXXX;iM,rr7XXXXiiirXSS2aaa2SSXXrrrr7777777XXXr;r77XXXXXX
XXXXXXXXXXXXXXXXXCHICHIXXXXX7XXri WM7,77rXXXXXX7 SM ;X7XXXSSSXi.::,,,:::iiirr7XXXXXXXXXXXX;;XS7XXXXX
XXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXX;:,MM.;77SXXXXX7XMMSSXXXXXX7XS22SX7r;;r7XSSXXXXSXXXXX7XSXrirXXr7XXXX
XXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXX7S,8MM27777XXXX;,MS.r7XXXXXX777X7XXS222SXXXXXXXXXXXXXS2X;i;SXX7XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7Xi rMB.rXXXXXX;,MS.XXXXXXX7XXSSSSXXX777XXX7XXXXXSSSS7ii;S2XX7XXXXXX
XXXXXXXXX7XXXXXXXXXXX7XXXXXXXXXXXXX7.aM0.77XXXXirMSiXXXXXXXXXXX7XXXXXXXXXXXSXSSSX7;:,irXXXX7XXXXXXXX
XXXXXXXXX7XXXXXXXXXXX7XXX7XXXXXXSr7Sr.MMi,XXXXX,ZM;;XXXXXXXXXXXXXXXXXXXXXXSSSX;,:irXS2SSSX7XXXXXXXXX
XXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXSXXX77,MM,;7XXX.BM.r7XXXXXXXXXXXXXXXXXXXSX7i:,;XSXXX777XXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXri7M@ rXXX WM X7XXXXXXXXXXXXXXXX777ri:;7SSXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7r @Mri777 MM S7XXXXXXXXXXXXXXXXXSX7rXSX7777XXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXSX;:MM:,;; MM X;X7SX77XXXXXXXXXXXXirX7XXSSXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXirMM.;7:MM i.;;77X7XXXXXXXXXXX7irSXX777XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXrX7r MMWWBSXZ8MMZ,.77XXXXXXXXXXXXr:rSXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXS7X;i2B;:.i     .BMS rXXXXXXSSXXXSXirS7XXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7SrZMXr8BMMMMMMMMMMW,rXXXXXXS;;;i7:iX2SXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2;,M22X00MMMMMMMMMa0Mi7XXXXXX;WW0M;iXX7XXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXS7rMiSXr;.M   B 0BraM;iXXXXXXXMSiMSr;;rX22XXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXSXXXXX77rMrSaXa2M  0MBZM;ZMM,XSXX2;.SM@WiXr7i:iX2a2XXXXXXX77XXXXXXXSX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX77rMrXS2SBa   MMMM: MMa;XS7riZ@MBr;SXSXX;,,irS2a222222a2SSX2Sri
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX77rM;S2SX8M         MaM.7SriS@80irXXXSXS227i,. .,iirr7rrrr;i. i
XXXXXSSSSSXXXXXXSSSSSSSSSSXXXXXXXXXXXSX.M;X2227M  ,.    2ZXMi77,8M@M.XSSSSSSSSS22Z8ZX77i.....:i;rSa2
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXS.MXX22SrWM      0MSiMi XMBMa:XXXXXXXXXXXXSXXS2222aZ8ZZaaa2SXX
SSSSSXXXXXSSSSSSXXXXXXXXXXXXXXXXXXXXXXS.M27S22SrBMMMMMM0rX;M;8MXMZ,SrXXXXXXXXXXXXXXXXXSSSSSXXXSSSSSS
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXS7S.MZ72SXZSXrii:,,7SX;MWi8M;;7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXSXXiBWrSSSS;:XZZ8MBM8S;MW@MrrXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSX7SM;227;8MMMMMMr7SS:M@ irSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSXX27;,XMXXa;0MM@@@MM:7XS;M0,SXSXXXXSSSSSSXXXXXXXXXXSSSSSSXXXXXXXXS
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSXXSSri0B0rXrXiMMMMMMMMi72a;M0iSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSX27r2MXr@MM7SiM :   @MWZ72iMZrSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSX7;0BaMM:r@7a2M7BMM0;i;7S2rM7XS2SSSSSSSSSSSSSSSSSSSSSSXSSSXSSSSSSSSS
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSXrSMMWB;r:BW;S;ZSX7r7SX2S2;ZM;SXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS78MMZ:;7aiW0raSSX7XSS2X222iMZrX2X2SSSSSSSSSSSSSSSS2222SSSSSS2SSS2SSSS
SSSSSSSSSSSXSSSSSSS2S22222SSS22;MrM;7X22;BMr222Saa222S2S7SM7XSaSSSSSSSSSSSSSSSSSSSSSSSSSSSS2SSS2SS2S
SSSSS2SSSS2aa2aZ88800BWWWWWB008SM0M82222r8MiX2S2SSS2SZrX;M272222SSSSSSSSSSSSSSS2SSSSSSSSSSSSSSSSSSSS
22SSS2222aZ888Z2r:.             . .iaZZ880MaraX2SSS2SX;SMMXZ8888ZZZaa22222222222SS222222222SSSSSSSSS
SS22ZZ8BBZr,    rX2ZZ888ZZa222SS77;7i,,:. ;@i2rXX7r7iZMM0i7;;;;;;rX2Z88Z80088Za222SSSS22222SSSSSSSSS
SZZZBa;   ;Sa888ZS777r;rXSa8ZZ80B8222Z22aXZZWMWB@MB@0Mr  ,i;rrrrr;i:,.     :77Z0Z8Za2aS2222SSSSSSSSS
0BS.  ;Z0aaa2SXr;;Xa80BBBBBW@M@@@02XXaX2X70WW:7;7;:MBrXaZZaaaaa2222aaaZZZZ2XS,i,:irZ0ZZ2222SSSSSSSSS
;  X8ZaSSSS2S7X2WMWB888888ZXS7;irrXXSS7X7aMMrrX7S7aMM;XXSSXXXXXXSSSXXSSXXXS222a2aSr,.,XZaa2X2SSSSSSS
r2ZZ2SSSSSXXXX8MB8ZZZ808800277SSXSSSSX2S7S8ar7SS7i;7i;XSSSSSSSSSSSSSSSSSSSXSSSSSSSSaaX:.;Z8ZaSSSSSSS
2a2S7XSSSSSSSSr:.i80ZZ8BBWWZ7X2XXSSSSXXS7rrr7X7XSXXXXSSSSSSSSSSSSSSSSSSSSSXXXXXX7S2XXaZa7. ra0a2SSSS
SXS2SSSXXSXX7rX28B80BW0aX7rrXSS2SSSSS2SSSSSSXSSSSXS2SXSXSSSSSSSSSSSSSSSSX7rrr7777rr;rXXXa2Zr:ia0aSS2
SSSSSSSX7r7X28BWWWW8SX7rrXSXSXXXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSXrS80W@@BBBB82X77XSaSai i8ZZS
SSSSX7r720WWWWB0ZS;;77XSSSXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS7X00B08ZZ80888BWBaS7XXSZ8: 7aa
SSX7raZBB0Z80ZSrr7XXXSSSSSSXXXXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS78M88ZZZZZZ8888Z8BBSrXSS2Z2,,0
SrXXBW08888a;,r7SSSSSSSSSXSSSSSSSSSSSSSSSSSSSSSSXXXXXSSSSSSSSSSSSSSSSXrXZB8ZZZ88ZZZZZZZ8B887SSSSXZ i
SSBB08ZZZ8800BBSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSXXXXXSSSSSSSSSSSSSSSSSSX7X28ZZZ8ZZZZZZZZ8Z87SSSS2aZi
"""

mr_krabs = r"""
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7r7XSXXXXX;X7irXXXXXXXXXXX7X7777777r77rrrrr;;;;;;;r;;;;ii;i
XXXXXXXXXSXXXSSXXXXXXSXXXSXXXSSXXXSXXXXX7;07i77XSXr2MMaa7XXXXXXXXXXXXX7X7777rr7777rrrrr;rrr;;;;;iii;
XXXXSSSSSSXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7aW@@WZ7XXXXMZ2WarXXXXXXXXXXX7777777X777r7rrrrrrrr;i;;;;;;i;i
XXXSXXSXXXSSSXXXSXXSXXXXXXXXSSSSXSSXSSSX2BWMMXXSSS7X@MM0XSSSSSSXXXXXXXXX7X7X7XX77rrrrrrrrrrrr;;r;;;i
SSSXSXXSSSXXSSSXXXXSXSXXSSSSSSSSSSSSSSSS7S80BaZ2222a.  iZZ2SSSSSSSSSXXXXXXXX77777r7rrrrrrrr;;;;;;;;i
SSXSSXSXSXSXXSXSXSXXXSXSXSSSSSXSSSSSSSSS28   ,SZ22aX .,.:ZaSSSSSSXXXXXXXXXX7777rrr;rr;;;;;;;;;;;;;;;
SSSSSSSSSSSSSXSSSXXXXXSXSXSSXSSSXSSSSSSSa2.::.:ZaSaa  .i:;82SSSSSSSSXXXXXXS7X7777rr;i:,::::iiiiiiii;
SSSSSXSXSSXSSSSSXXSSSSXXSSXSSSSSSSSSSSSSZX .;i,S82aB,,   :aZ2222SSSSXSSSSXSSXXSXS7rrSaZ8Z27;rrrrrrr;
SSSSSSSSSSSXXSSSSSSSXXSXSSSSSSSSSSSS222SZS,    r0a2Bi,iii:7822222SSSSSSSSSSSXXSX7XBMMMMMMMMW02X77r;r
SXSSSSSSSSSSSSSSSSSXSXSSXSSSSSSSSSS2SS22aZ,i   i2Z20X.::::iZa2222222SSSSS2SSSS2SaM@0B088000BW,22X77r
SSSXSSSSSSSSSXSSSSSSSSSXSSSSSSSSSSS2222Sa0::i;:i;0aZ8.::::i2Z2222222SSSSSSSSSS2SW@822SX7XSaZWS,:XX7r
SSSSSSSSSSSSSSXSXSSSXSXSSSSSSSSSS2SSS2SS20r,,,  ,ZZa0.    .SZ2222SSSSSSSXXXXXX7rS0Z7irSaaX7rXZMB:XX7
SSSSSXSSSSSXSSSSSXXSSSSSSSSSSSSSSSSSSS222ZZ, : : 70aB:,MW2 X8222222222222S22SX7r;;aW8X7;7Z88ZaaWZiS7
SXXXSXXXSXXXXXXXXXXXXXXXXSXXSSSSSS2SSS2S2a0; @MMi.Ba8X MMM 702222222222SSS2X7SWMM87aMM@0  .;XrrZ0 Sr
22222S2SXX777XXS22222222222222222222222222ZZ  MM, ZZZ8  7 .X02222222222222S7Z@W00B270WB@M@,ii;7ZB2X7
22222SXXa8BWB8a7X2222222222SS222222222222aa07    :S8aW,,,,iX02222a222a222a2S@WWWZ;ZMM@W@W0:X2ZZ88Z77
22SSXaWMMMM@MBMM0X2S2S22SS22SSSSSS222222S22Z8i:;iir0aBr:;;iS82aa22222222222SWW. BSX0MMBBW@X222a00S77
2a2aWWB8ZaaaZ80BWSa22222222a22222222222a22228Z:iiii0aZa:;i;282222222222a22aSB@  W2i.:8MMa:SZaZZB87X7
2ZWM@a2X7rr;XSaZS2SSSXXSaaaaaaaaaaaaaaa2a222a0X:iiiZaa0i;;;aZ2222S222SS2SSSSSM2. ;0WS:0a;aZZZZ0BS7X7
aB7 ar77XS27;2MZ22WMMMWaX2aaaa2aaa22aaaaa2aaaZB;i;iaZ20ri;rZZ22222222222S222SS0Wai aZaSSaZZZ0WWa7XX7
8S  0aaZa2aZMWMS22ZZZ0WMWSSa2aaaaaaa2a222a2a2a8Zii:rZ80r :7Za222222SSSSSSSSS2SSXZMWMM@@B00BWM0X7X777
0;,M8Za222rr0WMaSZ2S2BXSMB2aaZaaaaa2aa2222222aa8X  SBBBW  ra22222222222S2SSXSX7X@7Z0r28@MM@87ir7777r
0riBiX222SaMW0M@@W;SS8X ZWaZZZaaaaaaaaaaaaaaaaaaZS0B88Z0@B02S22222222a22a222SXZWXB@77X7;iii;7X77777r
Z8 @X,;S2SiaWM@WMMZi7W8 88aZaaaaaa2aaaaaaaaaaa22B@Ba@@MM@W@@ZS2a2a2a222S2SSXr80aMBr7XXXX77777777rr77
a0X;0X:.,;:WMM@MMi 70  ,Wa2aaaaaaaaaaaaaaaaaa22B00880WB;288BM0222222S222SSXXWZ8@arXXXXXXSXXX7X7777r7
2aZM0ZaX;:..  r0Z,aZ0.8B8ZZaZZZaaaaaaaaaaaaaa2W@WZZZa2Za8Z0MB0BZZZZaZZaaSS0W2B@XXS2SSSSXXXXXX777777r
aa2aBBZaZS2ZZaSXSa0ZMWBM8aaaaaaaaaaaa2aa2aaaaB0Z0@0aSSX2ZBWZZ00W@MMMMMWWMMSaMBSS222SSXXXXX7XX7777777
aaa220W0ZZZa222228W080r;ZW0a2aaaZZZZZZZ88008B08ZZaaB@@@@8ZZ8BBW@8X;r;i.:7Z@BSXS2SSSXXXXXXXXXXXX7X777
2SS2SSX8WW088Z88BM0XXaBW2rSBWW8aaZZ0WMMMMMWMMM@WWB088Z0BW@MM0arirS7 ...,rB2XS22SSSSSXXXXXXXXXXXXX777
222222SXXSZBW@@W8SS222S28B8SrS8@@WW@S77;i,:;iirSS222r,.  .  .ii;X22X72aZZ2S2SSSSSSXSXXXXXXXXXX7777X7
22222222SSSX7777XS222222SS28BBZS77SZ      rX7;i,:.  :i  r;rii7rr7SSZB@8Zaa222SSSSSSSSXXXXXXXXXXXXXX7
SSSS22S22S2222222S2SS22222SSXS28BWWSr,irS72SXrrr;:ir;rSZ;;;rrrr77XX77ZBaaa2222222SSXSSSXSSXXXXXXX777
2S2S2SS2SSS2222SS2S2S2S2222222SSSS2Z0BWM8aSX7r;;;;;;;iiii;;;;;i:iiiiXB08a22a222SS22SSSSSSXXXXXXX7XX7
2222S222S2222SSSSSS222S222222222222aaZa@2;iiii,.,....        :rSZ08a;..;@a2a222a2S2SSSSSXXSXXXXXXXXX
2S2222222222222S22S22222S222222222aaaSX7aZZZZZZa2aZZZ80000BBBB2,   i8MMBr@Zaaa222222SSSSSSSXSSXXXXXX
2222222222222222222S222222222a2a2aaa2XM0r;7r.           :.   . MMMMMMMMMraZZaaa2a22222SSSSSSXSXXXXXX
2222222S222222222S2222222222a2aaaaaaa0MMMMr MMMMMMMMMMMMa MMMM;7MMMMM2rrXaZZaaaaaa22SS2SSSSSXXXXXXXX
2222222SXX2222222222222222a22aaaaaaaaZBMMWi MMMMMWWMMMMMM i,   .Zi  .;rX22aZZaaaa22222S2SSSSSSXSSXXX
22S222222222222222222222222222aaaaaZZSri:rrir...i;;;i:,,;;r;;r7r;;7XXSSSSS2ZZaaaaa22SSSSSSSSSSXSXXXX
222222222222222S222222222222aaaaaaaZa2SSXXX7;;ii:ii;;;;;r7SX7X7Xr77r7XXSS2a2Zaaa2a2a2222S2XSSSXXSXXX
22222222222222222222222222aaaaaaaaaZa2SX77rr7777777r77XS7rrrr;;S7XXXXXXXXXSaZaaaaa2222S2SSSSSSSSSXXX
22222222222222222222222222a222aaaaaZZa22SSX77777r77XXXXXXXXSr7r7:ii;r777S2ZZZaa2222222222SSSSSSSSXSX
222222222222222S2222222a2a2a22aaaaaaZ2SXX77;;;::,,..        ; ,i;rrr7X2Z8ZZaaa22aa22S222SSSSSSSSXXSX
2222222222222222222222S222222aa2aaaaaZZa2SXr7rrrrr;rrrrrrr7;;;rr7X2aZ08ZZaaa2222222222SSS2SSSSSSSXXX
2222222222222222222222222222222222222aaZZ88Za2XX7rrr;r;rrr7XS22ZZZa80ZZaaa2222222S22SSS2SSSSSSXXXXXX
22222222222S2222SSSSSSS2222S222222222aa22aaZ80WW@@WB88000BB0000Ba2ZaZ2222222222S2S22SSSSSSSSSSXSSXXX
"""

gary = r"""
                .       .7a008aZ8ZS;                                                        ..      
                   :BMM@Zi         iaWMM2                                         :ZWBar            
          .     rMMM:    .::i:::ii:.    XMM@:             :i:            .    ,MMMM0;2ZWMMM    ..   
             ,0M@.  ,   ,:ii;;ii;;rrr;:.  .ZMM2      rMMMMMMMMMMWi          SMM8;,,i;i.  i8MB       
            WMX,  i:;:r7: ,,:;,,,,.,,,,,,:   iMMr  ,MWZi.. .. ;XZMM7    .  MMX,.i;;;;;:rX;iXWMX     
          0MZ.   78800WWa; ,,;:i;i:::,ii::ii.  ;@MMMS:;ir7ir7r;,  aMM:    rM;,i;rr77r,8i::  ;0M:    
    .   aM@   r..M8ZZ8Z0MM ii:,::::,,.,,.,:ii:.  MM i:;i77irS77Xr: iMMi   WZ,;r;;;;i:iZ7MMM0,iZM    
      ,MM, :r.r;7M@Z00WMMW..,;,iiiiii:,,::..:i, MM:,;X;;7ri7X70MMM2r;8M.  MX,rr;rr7r;7rrBMM0;X,Mr   
     ;Ma  .:.X,::8MMMMM07.ii,7iiii:iii:iii:,:,  Ma r.Xr;rr;7XrZMMMW7;7MZ  MS.irrr;;ri:27 ,iS0r;MZ,  
    rMZ.iirr:7:i. ..    ..:,,i:,, .::i,i::i:;i SMBi7;7rrr;;;7r,   .XXiWW  WZ,;;;Xr;7r;;X2Z2r: 7MZ.  
    M2. ,,.:.,iiir   ,,:,;iiri;.       .i;i;.. 0MS ;i;;;rr;;r7a2ZBBZi WM, iMi.,ir:irir;;i:::.;MM7   
   MS .;r;ir7i7;X;r.7;ri,;,::., .0W08r  :i:;:;. MM i;;;rrrrrr;ii:::,.rM0i  MM7 .i;r7:;iiii,  WMa    
  BM,,::      :,.,ii,.,,:.:iii.;B@BBW@ar  :iri. SM0 i7i;r;;;;;r7iir:.aMS    8M0i,  ,,,:.  iWMMZ     
 :MX . .r2ZXr :;ii:;;;ii;:i,i:.iW0aZaZ0M:  :.: i SMZ ii,7ir;;;r;;:.iZM@.     2MMMXX;,:ii0WMMW;      
 0M,., 7BW@MM  ,ii:iiiiii,i,i::XMMa2aaZMX:,:.;,r, ,MM7  ;.:ii:. . iWMM7        2MMMMMMMMMMMX        
 W@:  XMB2ZMM iiiiiiiiiiiiiiii. :BMMMMMMX,i7;;; .;  XMMM8r..  :XMMMMa.   ..      02     W8r     .   
 MS :i2MMMM0Z r7r;;i,,,:,i,i,i::,   :r  .::i,,.i:,ri   rMMMMMMMMZ7BZ         .   2Mi ;.rMZ          
.M: ;r:.i2B:...i. .      i:;:iiii7;., .:ir;riii::, ;Xi     M2     M0             iMX   8Ma          
:M.:ri;i, ..;i . .X7XSrr.   i:i;,iii;;;;., ,,::,:, :;.i,i. BMW.   W@.             MW   MMX          
.M; .     ,i,  aZ@MWWW0@M87.   .:..::,:iii,..,::;i.,7rr:ii ,MMW   7Mi             MM   MWr          
.M: .a8aS;   rB0W0Z0B8ZZ8B@WZi  7rrr;;::i,      ,7i,. .:i,.,MZW8  :Ma             MM  rMa.          
.Mi ZMWWMMX. 2BZ0ZZ@02ZaZZZZ0Ba .,,...,,. ,rBMr  ,i,:., :, :MZi@2  MM         .   WM  aMX.          
 M:,M0aa0MW:.2@280MMMM@08aaZZZ0S,.,i;i:,;;MM08BZ:.,,7ir;r.,rMZ X@  8Mi            MM  0Mi  .        
 Br.W808@@Z :0W0M8,    0MB28ZaBB2i.ii:i iX@ZBZZWB: ,i :,i .:MZ :Ma ;M2            MM  WM:           
 Za 8MMMMSi S@80S  iri;,rBWZ2aZZBr.,:,irr MM82SZMai;,r7ir:..MB  WM  M@.           MB  MW.           
 ZW.      . r00BX  ;..;  rBBZZZ8W0ar;77ii,.r@MMM0, ir.r:i.  MZ  rM2 8MX        .  M0  Ma            
 ;@X,;X;r;i.7W80Z ,Xrii;;,iBB28ZZ00: :.i,,:  iZ2ii::X:i:r,:7M0   MM  MB        .  MZ ,MS            
  @0 ::ii:,i,080B i;;i.:., r@Z2ZZ8Br.:i;iii;:   .i.,;.;i7, iM0,  7Mi ZM           M2 XMX            
  ZM ;7;ir;..000@ i ,,  .:..a@8aZ8BZ,.7i7;;ri:r;r7;,:r:,;i ,MB    MB iM;         .Mr aM;            
  iMi :iiii:7aB80a:  MMi.;7,iZ8aaa8Br :;ii7i7;7;:ir;i;iri: 2Ma    rM, WZ   .     7M, MM,            
   WM:.i;ii,, W@08a, @BW.,;i.XW8ZaaB8i:rrr;;iirirr,;X.;i.i 2MZ     MX 2@,  .     8M  MM             
   ,M8.:r;;r;.:8B8ZZaZ808 ir;.00a8ZZW7 iirrrr7;;7r:ir;X:r;,BMS     @W .MX  .     MM  MZ             
    aMS ,.:7Xr:X0WZ8BBW8M  :;.XWZ8ZZ@2.riiXrX7r7777rr;i,r.:MM7     ZM, MB        M0 .Ma             
 .   WMX:7Xi,i;.;BMW2XZMMi:,.,iW0aaa0a.i:i;ir7;;iiiiiiiri 7MBi  .  iMX aM;  .    M2 XMS             
      MM: ,,iXi; :8MMMM8X:X;ir:SWZ880W::;r7i7XXXX7r;rXiS: WMZ.      M8 .M8.     ,M; WM7             
      :MM::irr::ir,    . i; :: ;WZaZZB7ir7X7r:i;r;;ii;.7 .MMX       M@  BM,     SM. MM;  .          
  .    SM8 :; 7i,,irr;:;rrrrri,,2BZZZWZiir;;i7rr7XSXrirr rMB;       MM  SMS     MM  MM:             
        2M0  :ii;;;:ir7r;iiiii: ;08ZZW2:i;;rrXiiiiii;;r. aM2,       @@.  MM     MZ  MW:             
         SMM:.:ri:irri,:i;;rri;7SW0ZZW2:iri;irrr;ii;7X;  MW.        MM,  SMS    M,, M8,             
          2MM: ,irr;;r7:i;r777i,S0aZaWa:;Xr;irr;;;;rr;XXaMMZ.       MM    M@   ZM , MZ,             
           7MMS i:i;7i;7ii;:ii ,Z00Za@X :ii7;:;iiiii;;:i; i7ZBi     MM: i ;Mr  M2 ,.M2   .,         
            iMMX. 2.7XX27i;r77rS0ZZZ8MZ::;ii:;;rri;77i..:     2a    MM,,:. 8@  0    MS      .       
        .     0MM i X...i:i;::X0BZa8BMX:rXiiir;iii,   ,ZMMMMMMMMM@ZMMZ ,,:  MMMMMMMZMW   .          
               2M .:. ,      ;a88ZZ0BX  ii.i:.,.    ZMMM7.  , iX XZaM7 .r;; SaaaZ0BM8MM    .        
               @B ,i:SZBBM@ZaWB88888Z.          :XMMMB   ; ..       . ::;i;:          MMi           
               2M0MMMMMMMMMMMMMMMMMMMMWBBMMBWMMMMMM7  .,,:iii:i:::,.,..  .,,::iiii;i.  WMMZ         
           ,ZMMMMS2               :7a8WM@@W@@W8;    .rii:,        .,:i;i;i:.        .;7r:ZM8        
        rMM82i    , .. ....,,,.                          .ir7Saa80088800B08ZZ8a77X28BMaZMMMa:       
        .MMW8BMW; X:Xrri::;XS22aS7r7S2Xr;;;irXXX7ii;riaX77X2ZaS7r;i:,,,,,,:;7XZB@MMMMMMMMM8:        
         .X0W@MMMMB7SZ8MM@a;:,iiii;;;irSZWMBaSrr2WMMMMMMM@ZX;:rXZWMMMMMMMMMMMMMMMMBZX2SS7,          
               .SMMMMMMMMMMMMM27SZWMMMMMMMMMMMMMMMMMMMWMMMMMMMMMMMMMMMMMMM@@@ZSr.                   
                           7BMMMMMMMBZX;.     ,i:         .r2Za;                                   
"""

sandy = r"""
                                             78MS                                                   
                                          ,MM;   M                                                  
                                     BMMMMM     WMaMM                                               
                                   XM     MX.2MX     M                                              
                                   M   a M  aM:XMr  MMM8.                                           
                                   aMMB,  7B      M:   .8MMMZ                                       
                                   M      MM     MM         7MM;                                    
                                 BMSMMMMW@2iaBMMW              XMX                                  
                               rMX       MX M        ,MBM    M ;XXM                                 
                              MM         .MM MMMMMMM M  M    .M  M Mr                               
                             M0            M        .iWM       M: Z Ma                              
                            aM            M  @       M M        M, M M                              
                            M            :MMMMMMM MMM@XMM        @MW  M                             
                           MM            MM     .Mi     M             M                             
                           M             Mr  MMM M MMr  M             M                             
                           M            MWM     MXa    MMM            M                             
                           M          0M8.ZMMMMMWZMMMMMZ.,M@          M                             
                           M         M       M      MM   r  M         M                             
                            M       0M MW     MMMrMM;    aM M        WM                             
                            M.       M  rMM            MM2  M        M                              
                             M.       M0   8MMM08MZ0MMB   2M        M                               
                              M7       rMMM2  M  M  M rMMMa       MM                                
                               MM           X M     Mi          iMi                                 
                                 MM    2aZ8,  MM2MMMM .X2aSX   M8                                   
                                   MMM8ZZ00MMMMM   MMMMMMMMMMMMM                                    
                                   M M ZMMMMMMMXr8;MMMMM@8  7  Mra                                  
                             2MMMMMMBX    X      M     ;   i@MM  XMMMMMM;                           
                         rMMMM :M   8M.MMMMMMMMMMWXBMMMMMMM2 SM    8,  XMMMW                        
                       MMM M   M     M           .MM         MM    aM   M  SMM                      
                    2MMM   M   M     M           M M     ,rS  M    M    M    MMM                    
                  .MM  M   M   ,M   MM           M MM @MMr.7M M8  28   Mi   a@ 7M                   
             XMMMMM8   M   .M    M0BM             M   70M  MM  MMMM8  M     M   MMMMMM:             
           MMM    iM    M    MMMM@ 2M             M    M  M  M :M  iMMMa  0M   MM     MMM           
         MM        M.    SMMMr     ,M             M;   M  M  M  M      :MMW  MM0         MM         
        MM          MM0 MMX        XM              M   MWWMMMZ  M          MM             MB        
        M             ,MM          ;M             iM            MM         M               M        
        M        MMBM   M          :M             M              M        M.   MMMr        M        
        MM    :MM.  M   M          ,M              M;            M        M    M  MMM    :M.        
          MMMMM     MMMMM           M              M             M        MMiXMB    2MMMMM          
                      ,             M             M2             M          ZZ                      
                                    MS             M             M                                  
                                     M;            M            MM                                  
                                      MMr          7         iMM2                                   
                                       MMr    MMMMMMMMMMMM   @M                                     
                                     0MMr      MMW   MM      XMMW                                   
                                     M  MMMMMMMM M  M XMMMMMM2  M                                   
                                    0M           8Z M           M                                   
                                   rMM        MSM @XM.MM        M                                   
                              rMMMM;ZMMMMMM   M M MW7M M  :MMMMMMMMMMZ                              
                           :MMa               BMM MM  MM    M@        MMM                           
                           M  0MMMM               MM              rMMMB  MB                         
                          rM       M8        72MMMWMMaZ;        MMX       M                         
                          MM        M    S8XMMMMS    MMMM0W     M       X M                         
                          MMMMZ22r  S 8WMMMMM           MMMMM@Wrr ZWWZar;WMr                        
                            rMMMMMMMMMMMW                  ,MMMZSXB8MMMMM                           
                                   ;                           ;@WZ:                                
"""

# Keeps track of the current secret word
word = ''
# The list of words
words = ["Krusty Krab", "Pineapple", "Spongebob", "Patrick", "Squidward",
         "Krabby Patty", "Plankton", "Larry", "Karen", "Kelp Forest",
         "Sandy Cheeks", "Bubble Bass", "Tentacles", "Squarepants", "Mr Krabs",
         "Secret Formula", "King Neptune", "Gary", "Chumbucket",
         "Jelly Fishing", "Rock Bottom", "Bikini Bottom", "Flying Dutchman"]
# Keeps track of the characters that have been guessed
guessed = ''
# Keeps track of the characters that have been guessed that are incorrect
incorrect_guessed = ''
# ASCII Art ('letters' is a placeholder for the incorrect letters)
hangman_ascii = ['''
  +---+  letters
  |   |
      |
      |
      |
      |
=========''', '''
  +---+  letters
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+  letters
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+  letters
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+  letters
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''
  +---+  letters
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''
  +---+  letters
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']

def hangman_display(guessed, secret):
    '''Displays the secret word with the characters that have not been guessed
    replaced with dashes'''
    display = ''
    for char in secret:
        if char == ' ':
            display += ' '
        elif char.lower() in guessed.lower():
            display += char
        else:
            display += '-'
    
    return display


def hangman():
    '''Starts the hangman game. Gives the user information and rules then
    prompts them to guess.'''
    print(spongebob)
    print("\nWelcome to Spongebob Hangman\n    You can only have 6 errors.\n",
          "    You are allowed to guess multiple letters at a time, however ",
          "every letter you get wrong counts as an error.\n    Wrong letters ",
          "that you guess again do not count against you.\n    Your input can ",
          "not be longer than the secret.\n    Good Luck.", sep='')
    # Tell python to use the global variables
    global word, words, guessed, incorrect_guessed
    # Choose a random word
    word = random.choice(words)
    # Print it
    print("SECRET (for testing):", word)
    # Reset the characters guessed
    guessed = ''
    incorrect_guessed = ''
    # Keeps track of the number of errors made
    errors = 0
    # Keeps track of the current guess
    guess = ''
    # Keeps track of the current display
    display = hangman_display(guess, word)
    
    # While the word has not been guessed
    while display != word:
        # Print out the hangman ASCII and replace the letters placeholder with
        # the incorrect guesses
        print("________________________\n",
              hangman_ascii[errors].replace("letters", incorrect_guessed), "\n",
              display, sep='')
        
        if errors >= 6:  # The player loses
            print("Game Over.\nThe word was", word, end='.\n')
            break
            
        guess = raw_input("Guess: ")
        if len(guess) > len(word):
            print("________________________\n" +
                  "Your guess can not be that long.")
        elif re.sub("[^a-zA-Z ]", '', guess) != guess: # Use regex to replace
            # all characters that are not a-z or space for checking if there
            # are any symbols or special characters in the guess
            print("________________________\n" + "You may only guess letters.")
        else:
            # For every character guessed incorrectly, add one error
            for char in guess:
                if char.lower() not in word.lower() and \
                   char.lower() not in guessed and errors < 6:
                    guessed += char
                    errors += 1
            
            add_char(guess)
            display = hangman_display(guessed, word)
    else:  # when the player wins
        if word.lower() == "patrick":
            print(patrick)
        elif word.lower() == "spongebob" or word.lower() == "squarepants":
            print(spongebob)
        elif word.lower() == "plankton":
            print(plankton)
        elif word.lower() == "squidward" or word.lower() == "tentacles":
            print(squidward)
        elif word.lower() == 'mr krabs':
            print(mr_krabs)
        elif word.lower() == 'gary':
            print(gary)
        elif word.lower() == 'sandy cheeks':
            print(sandy)
        
        print(hangman_display(guessed, word))
        print("Congratulations you won!")
    
    choice = raw_input("Would you like to play again? ('yes' or 'no') ")
    
    if 'yes' in choice.lower():
        hangman()
    else:
        while 'no' not in choice.lower():
            if 'yes' in choice.lower():
                hangman()
            else:
                print ("Input must be 'yes' or 'no'.")
                choice = raw_input("Would you like to play again? ('yes' or 'no\
') ")


def add_char(guess):
    '''Adds a character to the string of guessed characters if it is not already
    in it. Also adds the character to the string of incorrect guesses if it is
    not in the secret word.'''
    
    global guessed, word, incorrect_guessed
    
    for char in guess:
        if char.lower() not in guessed:
            guessed += char.lower()
        
        if char.lower() not in word.lower() and \
           char.lower() not in incorrect_guessed:
            incorrect_guessed += char.lower()
            
hangman()