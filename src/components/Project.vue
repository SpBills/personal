<template>
    <div class="project" :style="{ backgroundImage: `url(${backgroundurl})` }">
        <div class="backdrop-blur">
            <div class="project-content">
                <div class="project-header">
                    <img v-show="icourl" :src="icourl" width="25" height="25" />
                    <h2>{{ title }}</h2>
                </div>
                <p>{{ text }}</p>
                <button class="visit-button" :style="{ backgroundColor: buttoncolor }" @click="redir">VISIT</button>
                <small class="timestamp">{{ timestamp }}</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        timestamp: {
            type: String,
        },
        backgroundurl: {
            type: String,
        },
        icourl: {
            type: String,
        },
        buttoncolor: {
            type: String
        },
        customlink: {
            type: String
        },
        galleryimgs: {
            type: Array
        }
    },
    methods: {
        redir() {
            try {
                let customUrl = new URL(this.customlink);
                location.href = customUrl;
            } catch (e) {
                let customUrl = new URL("http://" + window.location.host + "/" + this.customlink);
                customUrl.searchParams.append("title", this.title);
                customUrl.searchParams.append("imageurl", this.icourl);
                customUrl.searchParams.append("gallery", JSON.stringify(this.galleryimgs))
                location.href = customUrl;
            }
            
        }
    }
};
</script>

<style scoped>
.project {
    height: 250px;
    margin: 3vh 1vw;
    width: 33%;
    min-width: 325px;

    border-radius: 15px;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.6);

    display: flex;

    background-position: center;
    background-repeat: no-repeat;
}

.timestamp {
    opacity: 0.5;
    font-size: 10px;
    margin-top: auto;
}

.project-header {
    display: flex;
}

.project-header h2 {
    margin: 0 10px;
}

.backdrop-blur {
    width: 100%;
    backdrop-filter: blur(4px);
}

.project-content {
    display: flex;
    flex-direction: column;
    height: 85%;
    padding: 20px 10px 20px 10px;
}

.visit-button {
    border: 0;
    color: black;
    padding: 0.5rem;
    cursor: pointer;
    width: 20%;
    min-width: 75px;
    border-radius: 10px;
}
</style>
