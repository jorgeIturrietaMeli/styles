function normalizer(arr) {
    return arr.map(a => a.buy_box_winner || a)
}

module.exports = normalizer
