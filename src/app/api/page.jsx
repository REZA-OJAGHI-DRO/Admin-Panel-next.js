'use client'
import React, { useRef } from 'react'

function page() {
    const x=useRef()
    function send(){
        const y=x.current.children
        const y1=y[0].value
        const y2=y[1].value
        const y3=y[2].value
        const y4=y[3].value
        const y5=y[4].value
        const y6=y[5].value
        const y7=y[6].value
        const y8=y[7].value
        
        const newTask = {
            img: y1,
            orderId: y2,
            title: y3,
            Customer: y4,
            date: y5,
            price: y6,
            status: y7,
            cc: y8,
            
        };
        fetch('https://65c1ee91f7e6ea59682a15d9.mockapi.io/admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            // Send your data in the request body as JSON
            body: JSON.stringify(newTask)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task
            alert('your message is resived!')
        }).catch(error => {
            // handle error
            alert('adam bash')
        })
    }
    function del2() {
        fetch('https://65c1ee91f7e6ea59682a15d9.mockapi.io/admin/' + 20, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
     
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with deleted task
            alert('user by id ' + 4 + ' deleted!')
            location.reload()
        }).catch(error => {
            // handle error
        })
    }
  return (
    <div ref={x} className='flex flex-wrap gap-4 text-black'>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button onClick={send}>send</button>
        <button onClick={del2}>del</button>
    </div>
  )
}

export default page
