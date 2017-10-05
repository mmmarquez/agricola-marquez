<template>
    <nav class="navigation">
      <ul class="navigation--list">
        <li class="navigation--item">
          <span class="underlined--link">
            <a href="#" class="nav--link">
                Us
            </a>
          </span>
        </li>
        <li class="navigation--item">
          <span class="underlined--link">
            <a href="#" class="nav--link">
              When + Where
            </a>
          </span>
        </li>
        <li class="navigation--item">
          <span class="underlined--link">
            <a href="#" class="nav--link">
              Accommodations
            </a>
          </span>
        </li>
        <li class="navigation--item">
          <span class="underlined--link">
            <a href="#" class="nav--link">
              Registry
            </a>
          </span>
        </li>
        <li class="navigation--item">
          <span class="underlined--link">
            <a href="#" class="nav--link">
              RSVP
            </a>
          </span>
        </li>
      </ul>
    </nav>
</template>

<style lang="scss">
.nav--link {
  display: inline-block;
  color: #00233E;
}


.underlined--link {
    display: inline-block;
    position: relative;
  }

.underlined--link>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #00233E;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: .25s linear;
  }

  .underlined--link>a:focus:before, .underlined--link>a:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

.navigation { position:fixed; left: 30px; top: 4%; z-index: 99;
  .navigation--list { list-style: none; margin: 0; padding: 0;
    .navigation--item { list-style: none; text-align: left;
      margin-bottom: 1em;

    }
  }
}


</style>
