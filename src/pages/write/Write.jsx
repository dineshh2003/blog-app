import '../write/write.css'

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                    <label htmlFor="fileInput"><i class="fa-solid fa-plus"></i></label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="tell your story " type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}
