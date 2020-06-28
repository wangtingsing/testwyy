// 防抖
export function debounce(fn,wait){
    var timer = null; 
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(fn,wait)
        }    
    }

    
