import React from 'react';
import Directory from '../../components/directory/directory.component';
import DirectoryB from '../../components/directory/directory-for-Bottom';
const HomePage = ()=>(
    <div className="container pt-2 mt-3">
       <Directory/>
       <DirectoryB/>
    </div>
);
export default HomePage;