<template>
  <q-page-container>
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Creat Employee" color="primary" @click="prompt = true" />

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 400px">
          <q-card-section>
            <div class="text-h6">Employee</div>
          </q-card-section>

          <q-card-section>
            <q-input dense v-model="name" label="Name" autofocus @keyup.enter="prompt = false" />
          </q-card-section>

          <q-card-section>
            <q-input dense v-model="address" label="Address" autogrow @keyup.enter="prompt = false" />
          </q-card-section>

          <q-card-section class="q-pa-md">
            <q-input v-model="date" mask="date" :rules="['date']" label="Birth Date">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>

          <q-card-section>
            <q-input dense v-model="telephone" label="Telephone" autofocus @keyup.enter="prompt = false"
              mask="############" />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup color="red" />
            <q-btn flat label="Add" v-close-popup color="green" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <div class="q-pa-md">
      <q-table :grid="$q.screen.xs" title="Employee" :data="data" :columns="columns" row-key="name" :filter="filter">
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page-container>
</template>

<style>
</style>

<script>
  export default {
    name: 'PageHome',

    data () {
      return {
        prompt: false,
        date: '',
        telephone: null,
        filter: '',
        text:'',
        columns: [
        {
          name: 'desc',
          required: true,
          label: 'Name Employee',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
          { name: 'address', align: 'center', label: 'Address', field: 'address', sortable: true},
          { name: 'birthDate', label: 'Birth Date', field: 'birthDate', sortable: true },
          { name: 'telephone', label: 'Telephone', field: 'telephone' }
        ],
        data: [
          {
            name: 'Fadhil Abdullah H',
            address: 'Kuta Bumi, Tangerang-Banten',
            birthDate: '09 Oktober 1993',
            telephone: '08997220843'
          },
          {
            name: 'Saputra Candra I',
            address: 'Tanjung Duren, Tomang-Jakarta Barat',
            birthDate: '15 Agustus 1993',
            telephone: '09971386395'
          }
        ]
      }
    }
  }

</script>
