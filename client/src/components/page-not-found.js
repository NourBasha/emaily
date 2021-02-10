const PageNotFound = (props) =>{


    return(
        <div   className='container'>

                <div className='row 'style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

                    <div style={{marginTop:'70px', background:'#153942', padding:'40px', borderRadius:'10px'}}>
                        <h5 className='appText' style={{
                             margin: '0',
                             padding: '5px 0 5px 0',
                             fontFamily: `'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif`,
                             color: 'white'
                            
                        }} >  Page Not Found ... </h5>
                    </div>
                </div>
        </div>
    )
}

export default PageNotFound;