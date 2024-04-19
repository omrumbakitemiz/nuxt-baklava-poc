<template>
  <div>
    <div style="height: 400px">
      <bl-table
        selected='["row-1","row-4"]'
        selectable
        multiple
        sortable
        sticky-first-column
        sticky-last-column
        sort-key
        sort-direction
      >
        <bl-table-header sticky>
          <bl-table-row>
            <bl-table-header-cell
              sort-key="id"
              style="--bl-table-header-cell-min-width: 100px"
            >
              ID
            </bl-table-header-cell>
            <bl-table-header-cell
              sort-key="first_name"
              style="--bl-table-header-cell-min-width: 100px"
            >
              First Name
            </bl-table-header-cell>
            <bl-table-header-cell
              sort-key="last_name"
              style="
                --bl-table-header-cell-width: 150px;
                --bl-table-header-cell-min-width: 100px;
              "
            >
              Last Name
            </bl-table-header-cell>
            <bl-table-header-cell
              sort-key
              style="
                --bl-table-header-cell-width: 250px;
                --bl-table-header-cell-min-width: 250px;
              "
            >
              Email
            </bl-table-header-cell>
            <bl-table-header-cell
              sort-key
              style="--bl-table-header-cell-width: 85px"
            >
              Gender
            </bl-table-header-cell>
            <bl-table-header-cell
              sort-key
              style="--bl-table-header-cell-width: 90px"
            >
              IP Address
              <div style="margin-left: 12px">
                <bl-tooltip>
                  <bl-icon slot="tooltip-trigger" name="info"></bl-icon>
                  Ip address of end user
                </bl-tooltip>
              </div>
            </bl-table-header-cell>
          </bl-table-row>
        </bl-table-header>
        <bl-table-body
          ><bl-table-row selection-key="row-1">
            <bl-table-cell> 1</bl-table-cell
            ><bl-table-cell> Antonella</bl-table-cell
            ><bl-table-cell> Bellefonte</bl-table-cell
            ><bl-table-cell> abellefonte0@nba.com</bl-table-cell
            ><bl-table-cell> Female</bl-table-cell
            ><bl-table-cell> 193.108.174.118</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-2">
            <bl-table-cell> 2</bl-table-cell><bl-table-cell> Wash</bl-table-cell
            ><bl-table-cell> Carnson</bl-table-cell
            ><bl-table-cell> wcarnson1@jalbum.net</bl-table-cell
            ><bl-table-cell> Male</bl-table-cell
            ><bl-table-cell> 255.169.128.60</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-3">
            <bl-table-cell> 3</bl-table-cell
            ><bl-table-cell> Betteanne</bl-table-cell
            ><bl-table-cell> Cowgill</bl-table-cell
            ><bl-table-cell> bcowgill2@timesonline.co.uk</bl-table-cell
            ><bl-table-cell> Female</bl-table-cell
            ><bl-table-cell> 235.237.3.233</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-4">
            <bl-table-cell> 4</bl-table-cell
            ><bl-table-cell> Lilith</bl-table-cell
            ><bl-table-cell> Astbury</bl-table-cell
            ><bl-table-cell> lastbury3@shinystat.com</bl-table-cell
            ><bl-table-cell> Female</bl-table-cell
            ><bl-table-cell> 46.41.60.65</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-5">
            <bl-table-cell> 5</bl-table-cell
            ><bl-table-cell> Nikos</bl-table-cell
            ><bl-table-cell> Vasenkov</bl-table-cell
            ><bl-table-cell> nvasenkov4@slate.com</bl-table-cell
            ><bl-table-cell> Male</bl-table-cell
            ><bl-table-cell> 13.95.130.24</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-6">
            <bl-table-cell> 6</bl-table-cell
            ><bl-table-cell> Drucill</bl-table-cell
            ><bl-table-cell> Runciman</bl-table-cell
            ><bl-table-cell> drunciman5@hc360.com</bl-table-cell
            ><bl-table-cell> Female</bl-table-cell
            ><bl-table-cell> 185.192.50.41</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-7">
            <bl-table-cell> 7</bl-table-cell
            ><bl-table-cell> Gaspar</bl-table-cell
            ><bl-table-cell> Falls</bl-table-cell
            ><bl-table-cell> gfalls6@howstuffworks.com</bl-table-cell
            ><bl-table-cell> Male</bl-table-cell
            ><bl-table-cell> 107.51.243.94</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-8">
            <bl-table-cell> 8</bl-table-cell
            ><bl-table-cell> Hilary</bl-table-cell
            ><bl-table-cell> Izzatt</bl-table-cell
            ><bl-table-cell> hizzatt7@java.com</bl-table-cell
            ><bl-table-cell> Male</bl-table-cell
            ><bl-table-cell> 136.171.100.29</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-9">
            <bl-table-cell> 9</bl-table-cell
            ><bl-table-cell> Alonzo</bl-table-cell
            ><bl-table-cell> Beardwood</bl-table-cell
            ><bl-table-cell> abeardwood8@loc.gov</bl-table-cell
            ><bl-table-cell> Male</bl-table-cell
            ><bl-table-cell> 110.116.212.242</bl-table-cell> </bl-table-row
          ><bl-table-row selection-key="row-10">
            <bl-table-cell> 10</bl-table-cell
            ><bl-table-cell> Jacky</bl-table-cell
            ><bl-table-cell> Clyant</bl-table-cell
            ><bl-table-cell> jclyant9@earthlink.net</bl-table-cell
            ><bl-table-cell> Male</bl-table-cell
            ><bl-table-cell> 55.126.158.104</bl-table-cell>
          </bl-table-row></bl-table-body
        >
      </bl-table>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
