import React from 'react'

const Nav = (props) => {
    return (
        <div className='fixed bottom-10 w-fit rounded-lg p-2 flex space-x-2 bg-[#333239]'>
            <div className='p-2 rounded-lg bg-zinc-700 flex space-x-2'>
                {
                    props.navArr.map((tab) => {
                        return <div key={tab} className={tab.name === "Home" ? "border border-[#333239] bg-[#333239] text-white rounded-lg p-4 transition-all hover:scale-105 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22]" : "border border-white/10 text-white/30 rounded-lg p-4 transition-all hover:scale-105 cursor-pointer hover:bg-[#1c1b22] hover:border-[#1c1b22] hover:text-white"}>{tab.name}</div>
                    })
                }

            </div>
        </div>
    )
}

export default Nav