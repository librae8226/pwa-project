<template>
  <div class="container">
    <mu-list>
      <mu-sub-header inset>Folders</mu-sub-header>
      <mu-list-item title="Photos" describeText="Jan 9, 2014">
        <mu-avatar icon="folder" slot="leftAvatar"/>
        <mu-icon value="info" slot="right"/>
      </mu-list-item>
      <mu-list-item title="Recipes" describeText="Jan 17, 2014">
        <mu-avatar icon="folder" slot="leftAvatar"/>
        <mu-icon value="info" slot="right"/>
      </mu-list-item>
      <mu-list-item title="Work" describeText="Jan 28, 2014">
        <mu-avatar icon="folder" slot="leftAvatar"/>
        <mu-icon value="info" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider inset/>
    <mu-list>
      <mu-sub-header inset>Files</mu-sub-header>
      <mu-list-item title="Vacation itinerary" describeText="Jan 20, 2014">
        <mu-avatar icon="assignment" backgroundColor="blue" slot="leftAvatar" />
        <mu-icon value="info" slot="right"/>
      </mu-list-item>
      <mu-list-item title="Kitchen remodel" describeText="Jan 10, 2014">
        <mu-avatar icon="insert_chart" backgroundColor="yellow600" slot="leftAvatar" />
        <mu-icon value="info" slot="right"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 672px;
  margin: 16px auto;
}
</style>
