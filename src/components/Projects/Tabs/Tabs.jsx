import React, { useState } from 'react'
import '../projects.css'
import { IoIosRemoveCircle } from "react-icons/io";
import { CiSquareRemove } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function Tabs() {

    const[tabs, setTabs] = useState([])
    const[selectedTab, setSelectedTab] = useState(0)
    const[tabCount, setTabCount] = useState(0)

    function addTab() {
        setTabCount(prevTabCount => prevTabCount + 1)
        let arr = [...tabs]
        let tab = {
            name: 'Tab-' + (tabCount+1),
            content: 'This is tab-' + (tabCount+1) + ' content.'
        }
        arr.push(tab)
        setTabs(arr)
        setSelectedTab(tabCount+1)
    }
    function removeTab(index) {
        let arr = [...tabs]
        arr.splice(index, 1)
        setTabs(arr)
    }

  return (
    <div className='tabs'>

        <div className="tabsBody flex-v">
            <p className="title">Tabs</p>
            <div className="tabContainer flex-v">
                <div className="tabsHeader flex-h">
                    <div className="tabNames flex">
                        {tabs && tabs.length ?
                        tabs.map((tab, index) => <p key={tab.name} className='tabName flex' onClick={() => setSelectedTab(index)}>{tab.name} <button className='tabRemoveButton' onClick={() => removeTab(index)}><RxCross2 className='icon' /></button></p>)
                        : null}
                    </div>
                    <button className="button" onClick={addTab}>Add</button>
                </div>
                <div className="tabsContent">
                    <div className="tabContent">{tabs.length ?  tabs[selectedTab]?.content : null}</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Tabs
