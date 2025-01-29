<template>
  <section class="Home pt-4 sm:pt-6">
    <Alert class="pt-0 pb-2 sm:py-4">
      <AlertTitle class="font-bold hidden sm:flex sm:gap-2"> 
        <RocketIcon class="h-4 w-4 hidden sm:flex" /> Heads up!
      </AlertTitle>
      <AlertDescription class="p-0 text-xs sm:text-sm">
        <p class="pt-2">Unlimited image storage! You can upload as many images as you want.</p>
        <p>Images are cached after the first access and remain "permanently" available, distributed globally via CDN to ensure the fastest possible delivery.</p>
        <p>Xtapo Image Hosting is a file upload project supported and maintained by  
          <a class="text-slate-400" href="https://photos.xtapo.org/" target="_blank" title="Han Xiaohan's Blog">Photos Xtapo</a>,  
          dedicated to providing users with a stable and permanent storage service.
        </p>
        <p style="font-weight: bold">
          Open-source repository: 
          <a class="text-[#0969da]" href="https://github.com/xtapo/ZYCS-IMG" target="_blank">XTAPO-IMG</a>
        </p>
      </AlertDescription>
    </Alert>

    <!-- Toolbar -->
    <div class="pt-6 flex items-center text-sm">
      <div class="sync shrink-0">
        <RadioGroup default-value="sync" class="flex items-center gap-4 [&>label]:flex [&>label]:items-center [&>label]:space-x-2 [&>label]:cursor-pointer">
          <Label for="sync">
            <RadioGroupItem id="sync" value="sync" />
            <span>Imgur</span>
          </Label>
          <Label for="nosync">
            <RadioGroupItem id="nosync" value="nosync" disabled />
            <span class="text-gray-300">Pending</span>
          </Label>
        </RadioGroup>
      </div>
    </div>

    <!-- Upload -->
    <Upload v-model="fileList" :UploadConfig="UploadConfig" :uploadAPI="uploadAPI" />
    <!-- Display -->
    <ResList v-model="fileList" :nodeHost="nodeHost" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Upload from '@/components/Upload/Upload.vue';
import ResList from '@/components/ResList/ResList.vue';
import { RocketIcon } from '@radix-icons/vue';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// IPFS Node
const nodeHost = ref<string>(import.meta.env.VITE_IMG_API_URL || location.origin);
// Upload API
const uploadAPI = ref<string>(`${import.meta.env.VITE_IMG_API_URL || location.origin}/upload`);
// Upload Configuration
const UploadConfig = ref<any>({
  AcceptTypes: 'image/*', // Allowed file types (comma-separated)
  Max: 0, // Maximum number of files (0 = no limit)
  MaxSize: 15, // Maximum file size per file (MB)
});
// Upload list
const fileList = ref<Array<any>>([]);
</script>

<style scoped lang="less">
@import 'Home.less';
</style>
