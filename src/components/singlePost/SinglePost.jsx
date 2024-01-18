import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          doloremque ducimus adipisci a. Iusto asperiores harum aperiam, velit
          vitae suscipit error, facere distinctio commodi eos veritatis, culpa
          dicta quo fuga!
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-file-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
      </div>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author : <b>hainji</b>{" "}
        </span>
        <span className="singlePostDate">
          Date : <b>haaanjii</b>{" "}
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis
        autem, minima odio suscipit blanditiis aliquam velit perferendis enim
        incidunt doloribus accusamus eligendi labore alias placeat eius
        consectetur sunt adipisci! Ipsa neque aliquam et officia eum odio a
        ratione alias ab tempore voluptatibus aspernatur perspiciatis facilis
        vel, sed libero corrupti accusantium vero ad sapiente esse illum
        voluptatem. Aut, voluptas vero. Sunt esse eveniet facere architecto
        aperiam dolor quo similique, reiciendis atque quaerat distinctio, natus
        labore fuga autem excepturi est laudantium, corporis perspiciatis
        explicabo ab! Error, animi nam? Vel, eaque ipsa! Consequuntur mollitia
        illo vitae odio ipsum id minima non repellat impedit, expedita
        recusandae modi ab nihil voluptatibus blanditiis nesciunt necessitatibus
        quod consequatur. Tempore vel adipisci cumque voluptatibus vitae, atque
        excepturi. Fuga, quos quo voluptatem delectus mollitia, unde ut, nisi
        modi dicta fugit ipsum doloribus dolorem quibusdam provident veniam
        architecto! Tenetur voluptates possimus nihil ut. Iure, ex laudantium.
        Ea, sunt dolorem.
      </p>
    </div>
  );
}
