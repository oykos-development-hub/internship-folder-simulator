import Container from '../container/container';
import './folder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder,faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  {
    text: 'New Folder',
    onClick: () => { console.log('New Folder clicked!'); }
  },
  {
    text: 'Rename',
    onClick: () => { console.log('Rename clicked!'); }
  },

  {
    text: 'Delete',
    onClick: () => {console.log('Delete clicked'); }
  }
];

function FolderComponent() {
  return(
  <Container menuItems={menuItems}>
    <div className='first'  >
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>UX Playground</span>
    </div>

    <div className='second'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Code</span>
    </div>

    <div className='second'>
    <i><FontAwesomeIcon icon={faChevronDown} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Design</span>
    </div>

    <div className='third'>
    <i><FontAwesomeIcon icon={faChevronDown} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Project Name</span>
    </div>

    <div className='fourth'>  
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Business Requirements</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Content Managemet & Strategy</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Data Science</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Deliverables</span>
    </div>

    <div className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>F(x) Specs</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Information Arhitecture</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Iterative Designs</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Meetings</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Style Guides</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>UI Assets</span>
    </div>

    <div  className='fourth'>
    <i><FontAwesomeIcon icon={faChevronRight} color='#737575' /></i>
    <i><FontAwesomeIcon icon={faFolder} color='#0d8d91' /> </i>
    <span>Usability & Accessibility</span>
    </div>
    </Container>
    );
}

export default FolderComponent;