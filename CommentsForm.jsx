export default function CommentsForm(){
    return (
        <div>
            <h4>
                Give a comments!
                <form action="">
                    <input placeholder="username" type="text" name="" id="" />
                    <br /><br />
                    <textarea name="" id="">Remarks</textarea>
                    <br /><br />
                    <input placeholder="rating" type="number" min={1} max={5} />
                    <br /><br />
                    <button>Add comments</button>
                </form>
            </h4>
        </div>
    )
}