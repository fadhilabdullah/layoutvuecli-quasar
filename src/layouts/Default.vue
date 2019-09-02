<template>
  <div id="q-app">
    <div class="q-pa-md">
        <q-layout view="hHh Lpr lff" container style="height: 80vh" class="shadow-2 rounded-borders">
          <q-header elevated class="bg-blue">
            <q-toolbar>
              <q-btn flat @click="drawer = !drawer" round dense icon="menu" ></q-btn>
              <q-toolbar-title>Pertamina Hulu Sanga-Sanga</q-toolbar-title>              
              <q-btn dense flat round icon="person" @click="right = !right" />
            </q-toolbar>
          </q-header>
    
          <q-drawer
            v-model="drawer"
            show-if-above  
            :mini="miniState"
            @mouseover="miniState = false"
            @mouseout="miniState = true"              
            :width="200"
            :breakpoint="500"
            bordered
            content-class="bg-grey-3"
          >
            <q-scroll-area class="fit">
              <q-list padding>
                <q-item to="/employee" clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="person" ></q-icon>
                  </q-item-section>
    
                  <q-item-section>
                    Employee
                  </q-item-section>
                </q-item>
    
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="star" ></q-icon>
                  </q-item-section>
    
                  <q-item-section>
                    Star
                  </q-item-section>
                </q-item>
    
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="send" ></q-icon>
                  </q-item-section>
    
                  <q-item-section>
                    Send
                  </q-item-section>
                </q-item>
    
                <q-separator ></q-separator>
    
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="drafts" ></q-icon>
                  </q-item-section>
    
                  <q-item-section>
                    Drafts
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </q-drawer>
          
          <q-drawer v-model="right" side="right" overlay behavior="mobile" elevated>                        
          </q-drawer>         

        <q-page-container>
          <router-view />
        </q-page-container>

      </q-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  el: '#q-app',
  data () {
    return {
      drawer: false,
      right: false,
      miniState: true
    }
  }
}
</script>
