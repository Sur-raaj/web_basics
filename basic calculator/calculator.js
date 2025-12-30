export let add = (x,y)=>x+y

export let  subtract = (x,y)=>x-y

export let multiply = (x,y)=> x*y

export let divide = (x,y) =>{
    if (y==0)
        return "Can't divide by 0"
    else
        return x/y
}