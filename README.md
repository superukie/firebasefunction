# firebasefunction
firebase function 사용 및 database (mysql) 연결 관련 내용 예제 

# 폴더 구조는 편집모드 에서 확인시 정확하게 파악 가능
(폴더)/firebase-function
	(폴더)/functions 
		 --index.js		
		    * require(‘firebase-functions’)  : functions 기능 사용
		    * require(‘firebase-admin’)      : admin 기능 사용 
		    * require(‘./test.json’) 	        : 서버 비공개키정보 저장
		    * … database 연결, App initialize 
		 --package.json
		 --test.json
		    * 
