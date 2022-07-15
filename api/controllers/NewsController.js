'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM dc_news'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM dc_news WHERE id = ?'
        db.query(sql, [req.params.newsId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let newsId = req.params.newsId;
        let sql = 'UPDATE dc_news SET ? WHERE id = ?'
        db.query(sql, [data, newsId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO dc_news SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM dc_news WHERE id = ?'
        db.query(sql, [req.params.newsId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}