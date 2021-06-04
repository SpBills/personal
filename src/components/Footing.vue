<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-grid">
                <h4>Contact</h4>
                <span>
                    spencebills0@gmail.com <br />
                </span>
                <span>&copy; 2021 Spencer Bills</span>
            </div>
            <div class="footer-grid">
                <h4>Social</h4>
                <span>
                    <a href="https://www.instagram.com/spencerbills_/"
                        >instagram</a
                    >
                    <br />
                    <a href="https://twitter.com/spbills_">twitter</a>
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
    width: 100%;
    color: white;
    background-color: black;
    padding: 50px 0;
    margin-top: 20px;

    display: flex;
    justify-content: center;
}

.footer span {
    font-size: 0.7rem;
}

.footer a {
    color: white;
    width: 100%;
}

.footer-container {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
}

.footer-grid {
    width: 50%;
    min-width: 260px;
}
</style>
