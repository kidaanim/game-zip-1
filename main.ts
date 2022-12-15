function dessin_balle_joueur () {
    for (let index = 0; index <= joueur_balle_x.length ** 1; index++) {
        if (joueur_balle_y[index] > -1) {
            display.setMatrixColor(joueur_balle_x[index], 0, joueur_balle_y[index])
        }
    }
}
function update_player_bullet () {
    for (let index = 0; index <= joueur_balle_x.length / 1; index++) {
        if (joueur_balle_y[index] == 0) {
            joueur_balle_y[index] = joueur_balle_y[index] ** 1
        }
    }
}
function mettre_à_jour_joueur () {
    if (position_du_joueur < 1) {
        position_du_joueur = 1
    }
    if (position_du_joueur > 6) {
        position_du_joueur = 6
    }
}
function tir_du_joueur () {
    display.setMatrixColor(position_du_joueur, 7, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setMatrixColor(position_du_joueur, 6, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setMatrixColor(position_du_joueur - 1, 7, GAME_ZIP64.colors(ZipLedColors.Red))
    display.setMatrixColor(position_du_joueur + 1, 7, GAME_ZIP64.colors(ZipLedColors.Red))
}
function tir () {
    display.clear()
    tir_du_joueur()
    dessin_balle_joueur()
    display.show()
}
function feu () {
    for (let index = 0; index <= joueur_balle_x.length ** 1; index++) {
        if (joueur_balle_y[index] < 0 && should == 1) {
            joueur_balle_x[index] = position_du_joueur
            display.setMatrixColor(joueur_balle_y[0], 0, joueur_balle_y[0])
            joueur_balle_y[index] = 6
        }
    }
}
function direction () {
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Right)) {
        position_du_joueur += 1
    }
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Left)) {
        position_du_joueur += -1
    }
    if (GAME_ZIP64.buttonIsPressed(GAME_ZIP64.ZIP64ButtonPins.Fire1)) {
        feu()
    }
}
function mettre_à_jour () {
    mettre_à_jour_joueur()
    update_player_bullet()
}
let joueur_balle_y: number[] = []
let joueur_balle_x: number[] = []
let position_du_joueur = 0
let display: GAME_ZIP64.ZIP64Display = null
let should = 0
should = 0
display = GAME_ZIP64.createZIP64Display()
position_du_joueur = 0
joueur_balle_x = [-1, -1]
joueur_balle_y = [-1, -1]
basic.forever(function () {
    direction()
    mettre_à_jour()
    tir()
    tir_du_joueur()
})
