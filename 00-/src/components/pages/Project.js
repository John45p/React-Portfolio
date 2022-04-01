export default function Project(props) {
  console.log(props.pic)
    return (
      <div class="container" className="col-sm-6">
        <div class="row" >
          <div class="col-sm">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            
            <a className="btn btn-light" style={{textDecoration: "none"}}
              href={props.repo}
              target="_blank"
              rel="noreferrer"
              
            >
              GitHub
            </a>
            <a className="btn btn-light" style={{textDecoration: "none"}}
              href={props.deployed}
              target="_blank"
              rel="noreferrer"
            
            >
              Deployed
            </a>
          </div>
        </div>
      </div>
    );
  }