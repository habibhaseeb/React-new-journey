import Header from '../Header/header.css'

const colorOFPARA = '#222';
function component() {
    return <>
    <div className="navbar">
        <nav className='nav'><ul><li><button>Home</button></li>
        <li><button>Contacts</button></li>
        <li><button>Blog</button></li>
        <li><button>Services</button></li></ul></nav>
    </div>
    <div className="container" style={{maxWidth: 500 , color: 'white',borderRadius:'10px',margin: '50px', fontFamily: 'sans-serif', lineHeight: '23px', border: '1px solid black', padding: '1.5rem', backgroundColor: '#321'}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente cumque molestiae corporis, quo, voluptate commodi nostrum iste vero recusandae pariatur esse, ad officia aliquam dolore illo explicabo saepe consequuntur facere.</p>
    </div>
    <h1 className='text-yellow-400 font-serif font-extrabold'>Hello my firts tailwinds css in REACT.js</h1>
</>
}


export default component;
// continue code 