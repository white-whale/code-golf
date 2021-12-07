__High Scores__

|            | Javascript |   Python   |
| ---------- | ---------- | ---------- |
| Question 1 |    43      |    43      |
| Question 2 |    61      |    66      |
| Question 3 |    57      |    56      |
| Question 4 |    89      |    95      |
| Question 5 |    169     |    150     |


__Question 1__

Javascript - 43 - Tim, Sarah, Britta

    function question1(array) {
        return array.reduce((a,c)=>a+c.price*c.quantity,0)
    }


Python - 43 - Tim

    def question_1(array):
        return sum(o['price']*o['quantity']for o in array)



__Question 2__

_Note_: There was some controversy whether odd-indexed characters needed to be converted to lower case.
As the question is more interesting with two methods instead of one, the characters need to be made lower case.


Javascript - 61 - Tim

    function question2(string) {
        return string.replace(/./g,(x,i)=>x[`to${i%2?'Low':'Upp'}erCase`]())
    }


Python - 74 - Tim

    def question_2(string):
        t=string
        s=''
        for i in range(len(t)):
            s+=t[i].lower()if i%2 else t[i].upper()
        return s


Python - 66 - Pete

    def question_2(string):
        return ''.join(s.lower()if i%2else s.upper() for i,s in enumerate(string))



__Question 3__

Javascript - 57 - Tim

    function question3(n) {
      for(var s='',x,a=i=0,b=1;i<n;){
        x=a
        a=b
        s+=i++?' '+b:b
        b+=x
      }
      return s
    }


Python - 56 - Tim

    def question_3(n):
        a=1
        b=1
        s=''
        for i in range(n):
            s+=' '+str(a)
            x=a
            a=b
            b+=x
        return s[1:]



__Question 4__

Javascript - 89 - Tim

    function question4(directions) {
        for(var a,d=directions,i=d.length;i>0;)
            (a=d[i--])&&a!=d[i]&&a[4]==d[i][4]&&d.splice(i,2)
        return d
    }


Python - 95 - Tim

    def question_4(directions):
        d=directions
        l=len
        i=l(d)
        while i>0:
            i+=(i<l(d))-2
            if(d[i]!=d[i+1])*l(d[i])==l(d[i+1]):
                del d[i:i+2]
        return d


Python - 101 - Pete

    def question_4(directions):
        d=directions
        i=len(d)-1
        while i>0:
            i-=1
            if d[i]!=d[i+1]and d[i][-1]==d[i+1][-1]:
                del d[i:i+2]
                i-=i==len(d)
        return d


__Question 5__

Javascript - 169 - Tim

    function question5(values) {
        for(var s='',v=values,l=v.length,i=Math.max(...v),n='\n';i>0;i--){
            for(var j of v)
                s+=j>=i?'# ':'  '
            s=s.trimEnd()+n
        }
        s+='-'.repeat(l*2-1)+n
        for(;i<l;)
            s+=++i+(i==l?'':' ')
        return s+n
    }


Python - 150 - Tim

    def question_5(values):
        s=''
        v=values
        l=len(v)
        n='\n'
        for i in range(max(v),0,-1):
            for x in v:
                s+='  'if x<i else'# '
            s=s.rstrip()+n
        return s+'-'*(l*2-1)+n+' '.join(map(str,range(1,l+1)))+n


Python - 157 - Pete

    def question_5(values):
        s=''
        v=values
        l=len(v)
        for i in range(max(v),0,-1):
            for x in v:
                s+='  'if x<i else'# '
            s=s.rstrip()+'\n'
    return s+'-'*(l*2-1)+'\n'+' '.join(map(str, [*range(1,l+1)]))+'\n'
