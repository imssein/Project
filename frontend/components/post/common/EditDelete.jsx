import React, {useCallback} from 'react';
import authHeader from '../../../services/auth-header';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'

function EditDelete({ api, url, editApi}) {
    
    const handleDelete = useCallback(() => { 
        axios.delete(`${api}`, {
          headers: authHeader()
        })
        .then(() => {
          alert('삭제 완료')
          location.reload(`${url}`);
        })
    }, [api, url]);
    
    return (
        <div className="flex text-xs float-right text-gray mt-2">
        <Link href={`${editApi}`}>
            <div className='cursor-pointer'>수정</div>
        </Link>
        <div> &nbsp; | &nbsp; </div>
        <button onClick={handleDelete}>삭제</button>
      </div>
    );
}

export default EditDelete;