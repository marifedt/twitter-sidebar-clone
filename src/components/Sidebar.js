import '../css/Sidebar.css';

export default function Sidebar({children}){
    return (
        <div className='Sidebar'>
            <div className='Sidebar-content'>
                {children}
            </div>
        </div>  
    )
}