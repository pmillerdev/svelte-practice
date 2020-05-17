<script>
  import { onMount } from "svelte";

  import BackButtonRow from "./BackButtonRow.svelte";
  import BookCover from "./BookCover.svelte";
  import Button from "./Button.svelte";
  import Header from "./Header.svelte";
  import { httpGet, httpPut } from "../api.js";

  export let id;

  let book = {};

  async function handleFavouriteClick() {
    const toggledBook = {
      ...book,
      favourite: !book.favourite
    };
    const { ok } = await httpPut("/" + book.id, toggledBook);
    if (ok) {
      book = toggledBook;
    }
  }

  onMount(async _ => {
    const { data } = await httpGet("/" + id);
    book = data;
  });
</script>

<style>
  .detail {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40vw, 20rem));
    grid-template-rows: minmax(64vw, 32rem) auto;
    gap: var(--spacingXLarge);
  }
  .cover {
    position: relative;
    display: flex;
    margin-bottom: var(--spacingXLarge);
  }
  .favourite {
    position: absolute;
    width: 90%;
    left: calc(10% + var(--spacingSmall));
    bottom: var(--spacingLarge);
  }
</style>

<BackButtonRow />

<Header element="h1" size="large">Discover</Header>

<div class="detail">
  <div class="cover">
    <BookCover {book} />
    <div class="favourite">
      <Button on:click={handleFavouriteClick}>
        {book.favourite ? 'Unfavourite' : 'Favourite'}
      </Button>
    </div>
  </div>
  <div>
    <Header>About</Header>
    <p>{book.about}</p>
  </div>
</div>
