function brackMatch(inputString) {
    var opening = [];  // 用来存储左括号
    var isMatched = true;  // 用来标记括号是否匹配
    
    for (var i = 0; i < inputString.length; i++) {
        var symbol = inputString.charAt(i);  // 获取当前字符
        
        // 如果是左括号，入栈
        if (symbol === '{' || symbol === '(' || symbol === '[') {
            opening.push(symbol);
        }
        
        // 如果是右括号，检查是否匹配
        if (symbol === '}' || symbol === ')' || symbol === ']') {
            if (opening.length === 0) {
                isMatched = false;  // 如果没有左括号可匹配，说明不匹配
                break;
            } else {
                var match = opening.pop();  // 弹出栈顶元素（左括号）
                isMatched = (symbol === '}' && match === '{') ||
                            (symbol === ')' && match === '(') ||
                            (symbol === ']' && match === '[');
                if (!isMatched) break;  // 如果不匹配，直接退出循环
            }
        }
    }
    
    // 循环结束后，检查是否还有未匹配的左括号
    if (opening.length > 0 || !isMatched) {
        return 'unmatched';  // 如果有未匹配的括号，返回 'unmatched'
    } else {
        return 'matched';  // 否则，返回 'matched'
    }
console.log(brackMatch("{[()]}"));  // 输出: 'matched'
console.log(brackMatch("{[(])}"));  // 输出: 'unmatched'
console.log(brackMatch("{[}"));     // 输出: 'unmatched'

}
