<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Galeri</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Galeri</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="" />

      <!-- Galeri Grid -->
      <div class="gallery-grid">
        <ion-img
          src="https://picsum.photos/200/300?random=1"
          alt="Random Image 1"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=2"
          alt="Random Image 2"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=3"
          alt="Random Image 3"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=4"
          alt="Random Image 4"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=5"
          alt="Random Image 5"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=6"
          alt="Random Image 6"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=7"
          alt="Random Image 7"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=8"
          alt="Random Image 8"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=9"
          alt="Random Image 9"
        ></ion-img>

        <!-- Tambahan 9 gambar lagi -->
        <ion-img
          src="https://picsum.photos/200/300?random=10"
          alt="Random Image 10"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=11"
          alt="Random Image 11"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=12"
          alt="Random Image 12"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=13"
          alt="Random Image 13"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=14"
          alt="Random Image 14"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=15"
          alt="Random Image 15"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=16"
          alt="Random Image 16"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=17"
          alt="Random Image 17"
        ></ion-img>
        <ion-img
          src="https://picsum.photos/200/300?random=18"
          alt="Random Image 18"
        ></ion-img>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolom */
  grid-gap: 10px; /* Jarak antar gambar */
  padding: 10px; /* Ruang di sekitar grid */
}

ion-img {
  width: 100%;
  aspect-ratio: 3 / 4; /* Lebih tinggi dari biasanya */
  object-fit: cover; /* Agar gambar tidak terpotong aneh */
  border-radius: 8px; /* Sudut melengkung pada gambar */
}
</style>
