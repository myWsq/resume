<template>
    <div class="main">
        <name></name>
        <education></education>
        <skill></skill>
        <work></work>
        <project></project>
        <profile></profile>
        
    </div>
</template>

<script>
import Name from "./components/Name";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Project from './components/Project';
import Work from './components/Work';
import Profile from './components/Profile';

export default {
    components: {
        Name,
        Education,
        Skill,
        Project,
        Work,
        Profile
    }
};
</script>

<style lang='stylus' scoped>
.main
  width 800px
</style>

