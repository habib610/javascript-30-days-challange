const inputs = document.querySelectorAll('.inputFiled input')

function handleChange () {
    console.log(this.name)
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

console.log(inputs)
inputs.forEach(input => input.addEventListener('change', handleChange))
inputs.forEach(input => input.addEventListener('mousemove', handleChange))