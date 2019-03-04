//用异步函数 支持fetch 使用 fetch
export default async (url='',data={},type='GET',method='fetch') =>  {
    type=type.toUpperCase();

    if(type == 'GET'){
        let dataArr=[];
        Object.keys(data).forEach((key)=>{
            dataArr.push(key + '=' + data[key] );
        });
        url= url + dataArr;
    }

    if(window.fetch && method == 'fetch' ){
        let  requestConfig = {
            credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
        }
    if(type == 'POST'){
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }
        
    try{
        const response = await fetch(url,requestConfig);
        const responseJson = await response.json();
        return responseJson;

    }catch(error){
        throw new Error(error);
    }

    }else{
        return Promise((resolve,reject) => {
            let xhr;
            if(XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Mscrosoft.XMLHttp");
            }
            let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}
            xhr.open(type,url,true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(sendData);
            xhr.onreadystatechange= () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200 ){
                        let obj = requestObj.response;
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj);
                    }else{
                        reject(obj);
                    }
                }
            }

        });
    }
}