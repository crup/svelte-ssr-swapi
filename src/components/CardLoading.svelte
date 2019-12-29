<style>
.card {
    background-color: #ffffff;
    margin: 20px 0px 20px 20px;
    width: 250px;
}
.people header {
    background-color: #efefef;
}
ul.card-details {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin: 0;
    padding: 0;
}
ul.card-details > li {
    list-style-type: none;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
    font-size: 13px;
}
ul.card-details > ul li {
    list-style-type: none;
    padding: 5px 10px 5px 10px;
    background: #efefef;
    margin: 10px 15px 0px 0;
    position: relative;
}
ul.card-details li:last-child {
    border-bottom: none;
}
.card-title {
    display: inline-block;
    margin: 0px 0 0px 10px;
    font-size: 15.5px;
}
.card header {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: flex-start;
    padding: 15px;
}

.shine {
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px; 
  display: inline-block;
  position: relative; 
  animation-duration: 1s;
  animation-fill-mode: forwards; 
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards; 
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
}

.lines {
    height: 10px;
    margin-top: 0;
    width: 100%;
}

header i {
    min-width: 30px;
}

@keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0; 
  }
}

</style>

<div class="card people">
  <header>
    <i class="fas fa-spinner fa-spin"></i>
    <h3 class="card-title">Loading...</h3>
  </header>
  <ul class="card-details">
    <li><div class="shine lines"></div></li>
    <li><div class="shine lines"></div></li>
    <li><div class="shine lines"></div></li>
    <li><div class="shine lines"></div></li>
    <li><div class="shine lines"></div></li>
    <li><div class="shine lines"></div></li>
  </ul>
</div>
