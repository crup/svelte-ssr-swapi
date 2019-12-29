<!-- Todo: Refactor this component along with its loader component -->
<script>
    export let data;
    export let titleKey;
    export let items;
    export let icon;

    const additionalItems = [
        { key: "characters", icon: "👨‍👩‍👦‍👦" },
        { key: "planets", icon: "🌍" },
        { key: "films", icon: "📽" },
        { key: "vehicles", icon: "🚙" },
        { key: "starships", icon: "🚀" },
        { key: "pilots", icon: "🤖" },
    ]
</script>

<style>
.card {
    background-color: #ffffff;
    margin: 20px 0px 20px 20px;
    width: 320px;
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
ul.card-details ul {
    padding: 0px 10px;
    display: flex;
    border-bottom: 1px solid #eee;
}
ul.card-details > ul li {
    list-style-type: none;
    padding: 5px 10px 5px 10px;
    background: #efefef;
    margin: 10px 15px 0px 0;
    position: relative;
}
ul.card-details li:last-child, ul.card-details ul {
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
    height: 18px;
}
ul.card-details > ul li span {
    position: absolute;
    font-size: 10px;
    right: -8px;
    top: -8px;
    background: #999;
    color: #fff;
    border-radius: 82px;
    width: 19px;
    height: 19px;
    text-align: center;
    line-height: 19px;
}
header i {
    min-width: 30px;
    font-style: normal;
    font-size: 20px;
}
li i {
    font-style: normal;
    font-size: 24px;
}
</style>

<div class="card people">
  <header>
    <i>{icon}</i>
    <h3 class="card-title">{data[titleKey]}</h3>
  </header>
  <ul class="card-details">
    {#each items as item}
        <li>{item.label(data[item.key])}</li>
    {/each}
    <ul>
        {#each additionalItems as { key, icon }}
            {#if data[key] && data[key].length}
                <li>
                    <i>{icon}</i>
                    <span>{data[key].length}</span>
                </li>
            {/if}
        {/each}
    </ul>
  </ul>
</div>
