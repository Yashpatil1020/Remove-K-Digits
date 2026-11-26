var removeKdigits = function(num, k) {
    let sb=[];
    for(const ch of num){
        while(k>0 && sb.length>0 && sb[sb.length-1]>ch){
            sb.pop();
            k--;
        }
        sb.push(ch);
    }
    while(k>0){
        sb.pop();
        k--;
    }
    let start=0;
    while(start<sb.length && sb[start]==='0'){
        start++;
    }
    let ans=sb.slice(start).join('');
    return ans.length===0 ? "0" : ans;
};