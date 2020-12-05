<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let enabled;
    const onClose = () => {
        dispatch("onClose");
    };

    const submit = () => {
        let deadline = document.getElementById("picker").value;

        //data to call api
        let data = {
            title,
            desciption,
            deadline,
            finished
        };

        console.log(data);
    };

    let title;
    let desciption;
    let finished = false;
</script>

<style lang="scss">
    @import "../styles/Modal";
</style>

{#if enabled}
    <div class="modal">
        <div class="backdrop" />

        <div class="content-wrapper">
            <div class="header">
                <h5>Add / Edit todo</h5>
            </div>
            <div class="content">
                <input
                    class="title"
                    type="text"
                    placeholder="Title"
                    bind:value={title} />
                <textarea
                    class="desciption"
                    type="text"
                    placeholder="Desciption"
                    bind:value={desciption} />
                <div class="deadline">
                    <label class="label" for="picker">Deadline</label>
                    <input
                        id="picker"
                        class="picker"
                        type="datetime-local" />
                </div>
                <div class="finish">
                    <input
                        id="checkbox"
                        class="checkbox"
                        type="checkbox"
                        on:click={() => (finished = !finished)} />
                    <label class="label" for="checkbox">Finished</label>
                </div>
            </div>
            <div class="footer">
                <button class="cancel" on:click={onClose}>Cancel</button>
                <button class="confirm" on:click={submit}>Add / Update</button>
            </div>
        </div>
    </div>
{/if}
