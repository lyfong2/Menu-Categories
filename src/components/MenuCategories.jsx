import React, {useState} from 'react';

function MenuCategories({menu}){
    const [itemDetail, setItemDetail] = useState([]);
    const [shortName, setShowName] = useState('');

    let fetchMenuItem = (short_name) => {
        fetch(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`)
          .then(result => result.json())
          .then(result => setItemDetail(result))
          .catch(e => console.log(e))
        setShowName(short_name)        
    }
    return(
        <div>
            <ul>
                {menu.map(data => <li key={data.id} onClick={() => fetchMenuItem(data.short_name)}>{data.name}</li>)}
            </ul>
            {shortName === '' 
                ? null :
                <div> 
                    <h3>Items in Category: ({shortName})</h3>
                    <table>
                        <thead>                                 
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>                                
                        </thead>
                        <tbody>                            
                            {itemDetail.map(detailData => (
                                <tr key={detailData.id}>
                                    <td><p>{detailData.name}</p></td>
                                    <td><p>{detailData.description}</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
} 
export default MenuCategories;