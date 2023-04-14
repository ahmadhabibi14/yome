package middlewares

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func SessionMiddleware() gin.HandlerFunc {
	store := cookie.NewStore([]byte("s2i0ehujdkanodi02geu"))
	return sessions.Sessions("user_session", store)
}
