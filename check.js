

        let fname=document.getElementById('cusname');
        let fnumber=document.getElementById('cusnum')

        let info=document.getElementById('Update');

        info.addEventListener('click',(e)=>{
            e.preventDefault();
            //console.log(fname.value);
            profile={
                pname:fname.value,
                pnum:fnumber.value
            }
            alert('Successfully Registered')
            console.log(profile);
            info.disabled=true;
        })

