__High Scores__

|            | Javascript |   Python   |
| ---------- | ---------- | ---------- |
| Question 1 |    43      |    44      |
| Question 2 |    68      |    74      |
| Question 3 |    59      |    57      |
| Question 4 |    112     |    130     |
| Question 5 |    170     |    158     |


__Question 1__

Javascript - 43 - Tim, Sarah, Britta

    function question1(array) {
        return array.reduce((a,c)=>a+c.price*c.quantity,0)
    }


Python - 44 - Tim

    def question_1(array):
        return sum(o['price']*o['quantity'] for o in array)



__Question 2__

_Note_: There was some controversy whether odd-indexed characters needed to be converted to lower case.
As the question is more interesting with two methods instead of one, the characters need to be made lower case.


Javascript - 68 - Tim

    function question2(string) {
        return [...string].map((x,i)=>i%2?x.toLowerCase():x.toUpperCase()).join('')
    }


Python - 74 - Tim

    def question_2(string):
        t=string
        s=''
        for i in range(len(t)):
            s+=t[i].lower()if i%2 else t[i].upper()
        return s



__Question 3__

Javascript - 59 - Tim

    function question3(n) {
      for(var s='',x,a=0,b=1,i=0;i<n;){
        x=a
        a=b
        s+=i++?' '+b:b
        b+=x
      }
      return s
    }


Python - 57 - Tim

    def question_3(n):
        a=1
        b=1
        s=''
        for i in range(n):
            s+=' '+str(a)
            x=a
            a=b
            b=a+x
        return s[1:]



__Question 4__

Javascript - 112 - Tim

    for(var o={N:'S',S:'N',E:'W',W:'E'},d=directions,i=d.length;i>0;)
        if(d[i--]&&d[i+1][0]==o[d[i][0]])
            d.splice(i,2)
    return d


Python - 130 - Tim (using Patrick's idea)

    def question_4(directions):
        d=directions
        o={'N':'S','E':'W','S':'N','W':'E'}
        for i in range(len(d),-1,-1):
            if (i<len(d)-1and d[i][0]==o[d[i+1][0]]):
                del d[i:i+2]
        return d


__Question 5__

Javascript - 170 - Tim

    function question5(values) {
        for(var s='',v=values,l=v.length,i=Math.max(...v);i>0;i--){
            for(var j of v)
                s+=j>=i?'# ':'  '
            s+='x'
        }
        s+='-'.repeat(l*2-1)+'x'
        for(;i<l;)
            s+=++i+' '
        s+='x'
        return s.replace(/ *x/g,'\n')
    }


Python - 158 - Tim

    def question_5(values):
        s=''
        v=values
        l=len(v)
        for i in range(max(v),0,-1):
            for x in v:
                s+='  'if x<i else'# '
            s=s.rstrip()+'\n'
        return s+'-'*(l*2-1)+'\n'+' '.join(str(i+1) for i in range(l))+'\n'